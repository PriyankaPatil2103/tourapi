const Issue = require("../Model/IssuesSchema");

exports.addIssues = (req, res) => {
  const issue = new Issue({
    UserId: req.body.UserId,
    Issue: req.body.Issue,
    Description: req.body.Description,
    AdminRemark: req.body.AdminRemark,
  });
  issue
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.getAllIssues = (req, res) => {
  Issue.find()
    .populate("UserId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.updateDescription=(req,res)=>{
  Issue.findByIdAndUpdate(
    {_id:req.body.iid},
    {Description:req.body.newDescription},
    {new:true})
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      res.status(500).send(err);
    });
}
