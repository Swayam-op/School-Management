const Feedback=require('../Models/Feedback');
class FB{
    async fetchData(req,res){
     const feedbacks=await Feedback.find();
     console.log("yes");
     return res.status(200).json({"message":feedbacks});
    }
};

module.exports=FB;