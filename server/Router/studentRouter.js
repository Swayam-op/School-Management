const express = require('express');
const studentRouter = express.Router();
const StudentModel = require('../Models/Student');
const STUDENTCLASS = require('../Class/student_class');

const studentOBJ=new STUDENTCLASS();
studentRouter.post('/studentregister',studentOBJ.register);


module.exports = studentRouter;