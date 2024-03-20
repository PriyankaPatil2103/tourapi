const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    UserFullName:String,
    UserMobileNumber:Number,
    UserEmailId:String,
    UserAddress:String,
    UserPassword:String,
    UserRegDate:{type:Date,default:new Date()},
    UserUpdationDate:{type:Date,default:new Date()},
})

module.exports=mongoose.model('User',UserSchema)