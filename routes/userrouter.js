const express = require('express');
const { signUp, login } = require('../coontrollers/usercontrollers');
const userrouter = express.Router();

userrouter.post('/signup', signUp);
userrouter.post('/login', login);

module.exports = userrouter;
