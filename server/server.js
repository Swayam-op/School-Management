const express=require('express');
const dotenv=require('dotenv');
const app=express();
const mongoose=require('mongoose');
const Teacher=require('./Models/Teacher');
const Feedback=require('./Models/Feedback');
//Routers
const FeedbackRouter=require('./Router/FeedbackRouter');
const studentRouter = require('./Router/studentRouter');

dotenv.config({path:'./config.env'});
const Port=process.env.PORT;
const DBURL=process.env.DBLINK;


const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};
app.use(cors(corsOptions));

//body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//connection of mongo atlas
(async ()=>{
    mongoose.connect(DBURL,{
        useNewUrlParser: true,
         useUnifiedTopology: true,
        
    })
    .then(()=>{
        console.log("MONGODB DATABASE IS SUCCESSFULLY CONNECTED");
    })
    .catch((err)=>{
        console.log("ERROR : "+err);
    })
})();

app.get('/',(req,res)=>{
    return res.json({"message":"welcome to school management server side"});
});


app.use(FeedbackRouter);
app.use(studentRouter);


app.listen(Port,()=>{
    console.log("server is running on port "+Port);

})