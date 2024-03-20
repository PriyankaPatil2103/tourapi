const User=require('../Model/UserSchema');

exports.addUser=(req,res)=>{
    const user=new User({
        UserFullName:req.body.UserFullName,
        UserMobileNumber:req.body.UserMobileNumber,
        UserEmailId:req.body.UserEmailId,
        UserAddress:req.body.UserAddress,
        UserPassword:req.body.UserPassword,
    //     UserRegDate:req.body.UserRegDate,
    //     UserUpdationDate:req.body.UserUpdationDate,
    })
    user.save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
};
exports.getAllUser=(req,res)=>{
    User.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
exports.updatePassword=(req,res)=>{
    User.findByIdAndUpdate(
        {_id:req.body.Uid},
        {UserMobileNumber:req.body.newMobileNo},
        {new:true})
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).send(err);
        });
}
exports.doLogin=(req,res)=>{
    User.findOne({
        UserEmailId:req.body.UserEmailId,
        UserPassword:req.body.UserPassword,
    })
    .then((result) => {
        if(result){
            res.status(200).json({
                Data:result,
                success:true,
            });
        }
        else{
            res.status(200).json({
                data:{},
                success:false,
            })
        }
    }).catch((err) => {
        res.status(500).send(err);
        
    });
};