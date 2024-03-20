const Book = require("../Model/BookingSchema");

exports.addBokking = (req, res) => {
  const book = new Book({
    PackageId: req.body.PackageId,
    UserId: req.body.UserId,
    FromDate: req.body.FromDate,
    ToDate: req.body.ToDate,
    Comment: req.body.Comment,
    CancelledBy: req.body.CancelledBy,
  });
  book
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getAllBooking = (req, res) => {
  Book.find()
    .populate("PackageId")
    .populate("UserId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.updateBookingStatus = (req, res) => {
  Book.findByIdAndUpdate({ _id: req.body.Bid },
     { Status: req.body.Status })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.getBookingByBookingId = (req, res) => {
  Book.findOne({ _id: req.body.BookingId })
    .populate("PackageId")
    .populate("UserId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.getBookingByUserId=(req,res)=>{
  Book.find()
  .where("UserId")
  .eq({_id:req.body.UserId})
  .where("Status")
  .eq(req.body.Status)
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(500).send(err);
  });
}
