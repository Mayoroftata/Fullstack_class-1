const { userModel, imageModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Environment Variables
const PK = process.env.SECRET;
const cname = process.env.CName;
const ckey = process.env.Ckey;
const csecret = process.env.Csecret;

cloudinary.config({
    cloud_name: cname,
    api_key: ckey,
    api_secret: csecret,
});

// ====================== SIGNUP ======================
const signup = async (req, res) => {
    try {
        const { surName, firstName, lastName, userName, email, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User with this email already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            firstName: firstName || surName,   // Fixed: Use firstName if sent, fallback to surName
            lastName,
            userName,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            status: 201,
            message: "Account created successfully"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error during signup" });
    }
};

// ====================== LOGIN ======================
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            PK,
            { expiresIn: "24h" }   // Increased expiry time
        );

        res.status(200).json({
            message: `Welcome ${user.firstName}`,
            status: 200,
            token,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error during login" });
    }
};

// ====================== VERIFY TOKEN ======================
const verifyToken = async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({ message: "Token is required" });
        }

        const decoded = jwt.verify(token, PK);

        res.status(200).json({
            decoded,
            message: "Token verified successfully",
            status: 200,
            valid: true,
        });
    } catch (err) {
        console.error(err);
        res.status(401).json({
            message: "Invalid or expired token",
            valid: false,
        });
    }
};

// ====================== UPLOAD IMAGE ======================
const uploadFile = async (req, res) => {
    try {
        const { file } = req.body;   // Expecting base64 or URL

        if (!file) {
            return res.status(400).json({ message: "No file provided" });
        }

        const result = await cloudinary.uploader.upload(file, {
            folder: "/node_class",
        });

        const newImage = new imageModel({
            image: result.secure_url,
        });

        await newImage.save();

        res.status(201).json({
            message: "Image uploaded successfully",
            status: 201,
            imageUrl: result.secure_url,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Image upload failed" });
    }
};

module.exports = { signup, login, verifyToken, uploadFile };