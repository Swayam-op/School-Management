const Student = require("../Models/Student");

class STUDENTCLASS {
  async register(req, res) {
    const info = req.body;
    console.log(info);
    try {
      const isStudentExist = await Student.findOne({ userId: info.userId });
      if (isStudentExist) {
        console.log(isStudentExist);
        throw {
          message: "User already exists. Try with another userId",
          status: 400,
        };
      }
      if (info.classId === "") {
        throw {
          message: "Class can not be empty. Registartion unsuccessful",
          status: 400,
        };
      }
      const newStudent = new Student(info);
      await newStudent.save();
    } catch (err) {
      console.log(err.status);
      if (err.status === 400) {
        console.log("hii");
        return res.status(err.status).send({ message: err.message });
      }
      return res
        .status(400)
        .send({ message: "someting is wrong in server . try again later" });
    }
    return res.status(200).send({ message: "registration successful" });
  }
  
  //classList
  async classList(req,res){
    console.log(req.body);
    const {classId} = req.body;
    try{
      const student_list = await Student.find({classId : classId});
      console.log("we are in list page : ");
      console.log(student_list);
      return res.status(200).send({ student_list : student_list , message : "students of : " + classId});
    }
    catch(e){
     console.log(e);
     return res.status(400).send({message : e});
    }
    
  }
}

module.exports = STUDENTCLASS;
