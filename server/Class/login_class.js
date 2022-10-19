const Student = require('../Models/Student');

class LOGINCLASS {
    async studentLogin(req,res){
     const user_details = req.body;
     console.log(user_details);
     if(!user_details.userId || !user_details.password){
        console.log("empty");
        return res.status(401).send({message:"field can not be empty"});
     }

     try{
        const isUserExist = await Student.findOne({userId:user_details.userId, password:user_details.password});
        //isUserExist contains all the info of user
        const response = {
            isUserLogin:false,
            userDetails:'',
            userType:'',
            loginStatus:200,
            loginMessage:''
        }
        if(isUserExist){
            console.log("exist");
            response.isUserLogin = true;
            response.userDetails = isUserExist;
            response.userType = "student";
            
        }
        else{
            console.log("not exist");
        }
        return res.status(200).send({message :" successfully done"});
     }
     catch(err){
       return res.status(404).send({message:"error occurred"});
     }
     
     
    }
}

module.exports = LOGINCLASS;