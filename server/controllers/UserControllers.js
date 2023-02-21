const User = require("../models/UserModel")

exports.AddUser = async(req,res)=>{
    let {name,email,password} = req.body
        try {
    let user = new User({name,email,password})
    await user.save()
    res.status(200).send({msg:"user added with success",user})
        } catch (error) {
    res.status(500).send("user not added") 
        }
    }

exports.getUser = async(req,res)=>{
    try {
    const users = await User.find() 
    res.status(200).send({msg:"all users" , users})
    } catch (error) {
    res.status(500).send("error users")
    }
    }

exports.EditUser = async(req,res)=>{
    try {
    const user = await User.findByIdAndUpdate(req.params.id , {$set:{...req.body}} , {new:true})
    res.status(200).send({msg:"user apdated" , user})
    } catch (error) {
    res.status(500).send("user not updated")    
    }
}

exports.DeletUser = async(req,res)=>{
    try {
    const deleted = await User.findByIdAndDelete(req.params.id) 
    res.status(200).send({msg:"user deleted" , deleted})
    } catch (error) {
     res.status(500).send("user not updated")   
    }
}