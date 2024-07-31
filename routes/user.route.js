const express = require('express');
const router = express.Router();
const {getUsers, getUser, addUser, updateUser, deleteUser} = require('../controllers/user.controllers.js');

//gets all users
router.get('/get-all', getUsers);
//gets individual user
router.get('/get-one/:id', getUser)
//add user
router.post('/add', addUser)
//update user
router.put('/update-one/:id', updateUser);
//delete user
router.delete('/delete-one/:id', deleteUser);

module.exports = router;