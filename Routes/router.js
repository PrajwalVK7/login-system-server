
const userController = require('../Controller/userController')

const express = require('express');

const router = new express.Router();


router.get('/user/register',userController.registerUser)


module.exports = router;
