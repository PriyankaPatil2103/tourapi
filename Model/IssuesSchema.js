const mongoose = require("mongoose");

const IssuesSchema = mongoose.Schema({
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  Issue: String,
  Description: String,
  PostingDate: { type: Date, default: new Date() },
  AdminRemark: String,
});
module.exports = mongoose.model("Issue", IssuesSchema);
