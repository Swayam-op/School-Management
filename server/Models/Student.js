const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentSchema = new Schema (
    {
        
            fullName:String,
            fatherName:String,
            motherName:String,
            emailId:String,
            adharNumber:Number,
            gender:String,
            class:Number,
            phoneNumber:Number,
            whatsappNumber:Number,
            userId:String,
            password:String,
            admissionDate:String,
            birthDate:String,
            address:String
        

    }
);

const StudentModel = mongoose.model('student',studentSchema);

module.exports = StudentModel;