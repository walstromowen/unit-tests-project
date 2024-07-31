// a controller is basically the callback run for each API enpoint, they are condiered controllers here because they don't include the HTTP function or the route. These are just the callbacks that run for the endpoints now found in the router
const User = require('../models/user.model.js')

//get all users controller (formally endpoint)
const getUsers = async(req, res)=>{
    try{
        const users =  await User.find({});
        res.status(200).json(users);
     }catch(error){
         res.status(500).json({message: error.message});
     }
}
//get single user by id controller (formally endpoint)
const getUser = async (req, res)=>{
    try{
        const {id} =  req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
     }catch(error){
         res.status(500).json({message: error.message});
     }
};
//add user controller (formally endpoint)
const addUser = async (req, res)=>{
    try{
       const user =  await User.create(req.body)
       res.status(200).json(user);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
//update user controller (formally endpoint)
const updateUser = async (req, res)=>{
    try{
        const {id} =  req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return res.status(404).json({message: 'User not found'})
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
//delete user controller (formally endpoint)
const deleteUser = async (req, res)=>{
    try{
        const {id} =  req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: 'User not found'})
        }
        res.status(200).json({message: 'User sucessfully deleted'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {getUsers, getUser, addUser, updateUser, deleteUser};