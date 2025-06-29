const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router
    .get('/', userController.getUsers)
    .get('/:id', userController.getUserById)  
    .post('/create-user', userController.createUser);
    

module.exports = router;
