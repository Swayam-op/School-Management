const mongoose=require("mongoose");
const {Schema} =mongoose;
const Eventdb=require('../Database/Eventdb');

const Feedback_Schema=Schema({
    username:{
        type:String,
        required:true
    },
    passingYear:{
        type:Number,
        required:true
    },
    content:{
        type:String
    },
    rating:{
        type:Number
    },

});

const Feedback=Eventdb.model('Feedback',Feedback_Schema);

module.exports=Feedback;