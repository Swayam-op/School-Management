const express=require('express');
const feedbackRouter=express.Router();
const FB=require('../class/feedback_class');

const fb_obj=new FB();
feedbackRouter.get('/getfb',fb_obj.fetchData);

module.exports=feedbackRouter;