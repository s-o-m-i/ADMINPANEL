const User = require("../models/user-model");
const bcrypt = require("bcryptjs")
const home = async (req, res) => {
    try {
        res.status(200).json({ msg: "in a home controller" })
    } catch (error) {
        console.log(error)
    }
}

const register = async (req,res) => {
    try {
        console.log(req.body);
        const {username,email,phone,password} = req.body
        if(!phone||!username||!email||!password){
res.status(400).json({msg:"phone field is required"})
return
        }
        const isUserAlreadyExists = await User.findOne({email})
        console.log(isUserAlreadyExists)
        if(isUserAlreadyExists){
            res.status(400).json({msg:"email is already taken"})
            return
        }
        const saltRound = 10;
        const hashed_password =await bcrypt.hash(password,saltRound)
        const createdUser = await User.create({username,email,phone,password:hashed_password})
        if(createdUser){
            res.status(201).json({msg:createdUser})
            return
        }
        res.status(400).json({msg:"failed to create user"})
    } catch (error) {
        console.log("error in register api",error)
    }
}
module.exports = { home, register }