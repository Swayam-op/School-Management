const mongoose=require('mongoose');
const {Schema}=mongoose;
const userType = require('../structuredDataType')
const TeacherSchema=Schema({
    fullName:String,
    fatherName:String,
    motherName:String,
    emailId:String,
    adharNumber:Number,
    gender:String,
    assignedClasses: [{
        classId  :Number,
        classSubject : String
    }],
    phoneNumber:Number,
    whatsappNumber:Number,
    userId:String,
    password:String,
    admissionDate:String,
    birthDate:String,
    address:String,
    userType : {
        type: String,
        default : userType.TEACHER
    }

})

const Teacher=mongoose.model('Teacher',TeacherSchema);

module.exports= Teacher;