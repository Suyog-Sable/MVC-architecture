const { model } = require("mongoose");
const User = require("../models/user")

//get all users
async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

//get users by id
async function handleGetUserByID(req,res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error:"User not found"});
    return res.json(user);
}

//create user
async function handleCreateNewUser(req,res){
     const body = req.body;
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ){
        return res.status(400).json({msg:"All Fields are Required"});
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,
    });

    console.log("result",result);
    return res.status(201).json({msg:"Success",id: result._id});
}

//patch
async function handleUpdateUserByID(req,res){
    try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(updatedUser);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

//delete
async function handleDeleteUserByID(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Success"});
}




module.exports = {
    handleGetAllUsers,
    handleGetUserByID,
    handleUpdateUserByID,
    handleDeleteUserByID,
    handleCreateNewUser,
};