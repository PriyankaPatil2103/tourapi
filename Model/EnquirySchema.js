const mongoose=require('mongoose');

const EnquirySchema=mongoose.Schema({
    FullName:String,
    EmailId:String,
    MobileNo:Number,
    Subject:String,
    Description:String,
    PostingDate:{type:Date,default:new Date()},

})
module.exports= mongoose.model("Enquiry",EnquirySchema);