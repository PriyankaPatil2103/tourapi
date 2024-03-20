const express=require('express');
const router=express.Router()

const UserControler=require('../Controller/UserController');
router.post('/adduser',UserControler.addUser);
router.get('/getalluser',UserControler.getAllUser);
router.post('/updatepassword',UserControler.updatePassword);
router.post("/dologin",UserControler.doLogin);
//Packages

const PackageControler=require("../Controller/PackagesController");
router.post('/addpackage',PackageControler.addPackage);
router.get('/getallpackage',PackageControler.getAllPackages);
router.post('/updatedetails',PackageControler.updatePackageDetails);
router.post('/getpackagebyid',PackageControler.getPackageById);

//Issues
const IssueControler=require("../Controller/IssuesController");
router.post('/addissue',IssueControler.addIssues);
router.get('/getallissue',IssueControler.getAllIssues);
router.post('/updatedescription',IssueControler.updateDescription);

//Enquiry
const EnquiryControler=require("../Controller/EnquiryController");
router.post('/addenquiry',EnquiryControler.addEnquiry);
router.get('/getallenquiry',EnquiryControler.getAllEnquiry);
router.post('/updatemobileno',EnquiryControler.updateMobileNo);

//Booking
const BookingControler=require("../Controller/BookingController");
router.post('/addbooking',BookingControler.addBokking);
router.get('/getallbooking',BookingControler.getAllBooking);
router.post('/updatebookingstatus',BookingControler.updateBookingStatus);
router.post('/getbookingbyid',BookingControler.getBookingByBookingId);
router.post('/getbookingbyuserid',BookingControler.getBookingByUserId)

module.exports=router