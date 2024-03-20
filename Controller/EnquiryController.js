const Enquiry=require("../Model/EnquirySchema");

exports.addEnquiry=(req,res)=>{
    const enquiry=new Enquiry({
        FullName:req.body.FullName,
        EmailId:req.body.EmailId,
        MobileNo:req.body.MobileNo,
        Subject:req.body.Subject,
        Description:req.body.Description,
    })
    enquiry.save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
exports.getAllEnquiry=(req,res)=>{
    Enquiry.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
exports.updateMobileNo=(req,res)=>{
    Enquiry.findByIdAndUpdate({_id:req.body.EnquiryId},
        {MobileNo:req.body.newMobileNo,
            Subject:req.body.newSubject,
            Description:req.body.newDescription},
        {new:true})
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).send(err);
        });
}