const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")
dotenv.config()
let uri = process.env.URI

mongoose.connect(uri)
.then((response)=>{ 
    console.log("Database Connected Successfully");
})
.catch((err)=>{
    console.error(err);
    
})


let studentSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

let studentImage = mongoose.Schema({
    image: {type:String, required:true},
    student: { type: mongoose.Schema.Types.ObjectId, ref: "student" }
})

studentSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10, ((err, hash)=>{
        this.password = hash
        next()
        
    }))
})


let studentModel = mongoose.model("student", studentSchema)
let imageModel = mongoose.model("file", studentImage)

module.exports = {studentModel, imageModel}