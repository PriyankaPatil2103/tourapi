const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  PackageId: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  FromDate: Date,
  ToDate: Date,
  Comment: String,
  RegDate: { type: Date, default: new Date() },
  Status: { type: String, default: "Pending" },
  CancelledBy: String,
  UpdationDate: { type: Date, default: new Date() },
});
module.exports = mongoose.model("Book", BookingSchema);
