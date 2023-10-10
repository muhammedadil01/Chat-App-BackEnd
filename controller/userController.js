const express = require("express")
const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler")
const generateToken = require("../config/generateToken")

//Login
const loginController = expressAsyncHandler(async (req, res) => {
    const { name, password } = req.body;
    console.log("Received data from client:", name, password);

    const userLogin = await User.findOne({ name });
    console.log("userLogin:", userLogin);

    if (!userLogin) {
        res.status(401); 
        throw new Error("Invalid username or password");
    }

    const isPasswordValid = await userLogin.matchPassword(password);

    if (isPasswordValid) {
        const response = {
            id: userLogin._id,
            name: userLogin.name,
            password:userLogin.password,
            isAdmin: userLogin.isAdmin,
            token: generateToken(userLogin._id),
        };

        res.json(response);
    } else {
        res.status(401); 
        throw new Error("Invalid username or password");
    }
});


// Register
const registerController= expressAsyncHandler(async (req,res)=>{

    const {name,email,password} = req.body
   

    if(!name || !email || !password){
        res.send(400)
        throw Error("All necessary inputs are filled")
    }

    const userExist = await User.findOne({email})
    if(userExist){
        throw new Error("User Already Exist")
    }

    const userNameExist = await User.findOne({name})
    if(userNameExist){
        throw new Error("username is already taken")
    }

    const userRegister = await User.create({
        name,
        email,
        password
    })
    if(userRegister){
    res.status(201).json({
        id : userRegister._id,
        name : userRegister.name,
        email : userRegister.email,
        password : userRegister.password,
        isAdmin : userRegister.isAdmin,
        token : generateToken(userRegister._id)
    })
   }else{
    res.status(400)
    throw new Error("Registartion Error")
   }
 })
 

 module.exports = {loginController,registerController}