const mongoose = require('mongoose');
const {Schema} = mongoose;
const userType = require('../structuredDataType')
const studentSchema = new Schema (
    {
        
            fullName:String,
            fatherName:String,
            motherName:String,
            emailId:String,
            adharNumber:Number,
            gender:String,
            classId:Number,
            phoneNumber:Number,
            whatsappNumber:Number,
            userId:String,
            password:String,
            admissionDate:String,
            birthDate:String,
            address:String,
            attendance:{
                type : Number,
                default : 0
            }, 
            userType:{
                type : String,
                default : 'student'
            }
        

    }
);

const StudentModel = mongoose.model('student',studentSchema);

module.exports = StudentModel;