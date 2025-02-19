const {studentModel, imageModel} = require("../model/user.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2
require("dotenv").config();

let PK = process.env.SECRET;
let cname = process.env.CName;
let ckey  = process.env.Ckey;
let csecret = process.env.Csecret


cloudinary.config({
  cloud_name : cname,
  api_key: ckey,
  api_secret: csecret,
})



const signup = (req, res) => {
  const { surName, lastName, userName, email, password } = req.body;
  let user = new studentModel({
    firstName: surName,
    lastName,
    userName,
    email,
    password,
  });
  user.save()
    .then((result) => {
      if (result) {
        res.send({ status: 200, message: "you have signed up successfully" });
      }
    })
    .catch((err) => console.error(err));
};

const login = (req, res) => {
  const { email, password } = req.body;
  studentModel
    .findOne({ email })
    .then((result) => {
      bcrypt.compare(password, result.password).then((goodToGo) => {
        if (goodToGo === true) {
          let token = jwt.sign({ email }, PK, { expiresIn: "1h" });
          res.send({
            message: `Welcome ${result.firstName}`,
            status: 201,
            token,
          });
        }
      });
    })
    .catch((err) => console.error(err));
};

const verifyToken = (req, res) => {
  let token = req.body.token;
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    res.send({
      decoded,
      message: "token verified",
      status: 200,
      token,
      valid: true,
    });
  });
};

const uploadFile = (req, res) => {
  let convertedFile = req.body.file;
  cloudinary.uploader.upload(convertedFile, {folder:"/node_class"}, ((err, uploaded)=>{
    let data = uploaded.secure_url
    let image = new imageModel({image: data})
    image.save()
    .then((response)=>{
      res.send({message:"image uploaded successfully", response, status:201})
      
    })
    .catch(err=>console.error(err));
  }))
};

module.exports = { signup, login, verifyToken, uploadFile };
//  { email: 'anonymou@gmail.com', iat: 1739443071, exp: 1739446671 }
