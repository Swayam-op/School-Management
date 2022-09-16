const mongoose =require("mongoose");
const dotenv = require('dotenv');
dotenv.config({
    path:'../config.env'
});
const DBEVENT=process.env.DBEVENT;

const EVENT=mongoose.createConnection("mongodb+srv://swayam:44FPaqDMoS6r6v44@datamanagement.n6iegb2.mongodb.net/EVENT?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports=EVENT;