const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user.route.js');
const app = express();

const PORT = 3000;

//middleware
app.use(express.json());

//routes
app.use('/api/users', userRoute);

app.get('/', (req, res)=>{
    res.send('This is a response from the Unit Test Project Server');
});

mongoose.connect('mongodb+srv://walstromowen:N0af7umEQTJdYJI0@cuwdb.tpip061.mongodb.net/unitTestProjectDB?retryWrites=true&w=majority&appName=cuwDB')
.then(()=>{
    console.log('Connected to database.');
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    });
})
.catch(()=>{
    console.log("Failed to connect to database.")
})



/* API Endpoints if just coded in server file --> These were latter organized into routes and controllers

//get all users
app.get('/api/getUsers', async (req, res)=>{
    try{
        const users =  await User.find({});
        res.status(200).json(users);
     }catch(error){
         res.status(500).json({message: error.message});
     }
});
//get one user by id
app.get('/api/getUser/:id', async (req, res)=>{
    try{
        const {id} =  req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
     }catch(error){
         res.status(500).json({message: error.message});
     }
});
//add user
app.post('/api/addUsers', async (req, res)=>{
    try{
       const user =  await User.create(req.body)
       res.status(200).json(user);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});
//update user
app.put('/api/updateUser/:id', async (req, res)=>{
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
});
//delete user
app.delete('/api/deleteUser/:id', async (req, res)=>{
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
});
*/