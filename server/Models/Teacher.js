const mongoose=require('mongoose');
const {Schema}=mongoose;

const TeacherSchema=Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const Teacher=mongoose.model('Teacher',TeacherSchema);

module.exports= Teacher;