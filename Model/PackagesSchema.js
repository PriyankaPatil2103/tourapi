const mongoose = require("mongoose");

const PackagesSchema = mongoose.Schema({
  PackageName: String,
  PackageType: String,
  PackageLocation: String,
  PackagePrice: Number,
  PackageFeatures: String,
  PackageDetails: String,
  PackageImage: String,
  PackageCreationDate: { type: Date, default: new Date() },
  PackageUpdationDate: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Package", PackagesSchema);
