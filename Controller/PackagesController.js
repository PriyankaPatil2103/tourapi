const Package = require("../Model/PackagesSchema");

exports.addPackage = (req, res) => {
  const package = new Package({
    PackageName: req.body.PackageName,
    PackageType: req.body.PackageType,
    PackageLocation: req.body.PackageLocation,
    PackagePrice: req.body.PackagePrice,
    PackageFeatures: req.body.PackageFeatures,
    PackageDetails: req.body.PackageDetails,
    PackageImage: req.body.PackageImage,
  });
  package
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.getAllPackages = (req, res) => {
  Package.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.updatePackageDetails = (req, res) => {
  Package.findByIdAndUpdate(
    { _id: req.body.Pid },
    { PackageDetails: req.body.newDetails, PackagePrice: req.body.newPrice },
    { new: true }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.getPackageById = (req, res) => {
  Package.findOne({ _id: req.body.PkgId })
    // .populate("UserId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
