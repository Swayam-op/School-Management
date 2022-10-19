const express = require('express');
const loginRouter = express.Router();
const LOGINCLASS = require('../Class/login_class');

const LoginOBJ = new LOGINCLASS();

loginRouter.post('/login/student',LoginOBJ.studentLogin);

module.exports = loginRouter;