const express = require("express");
const  bookingController  = require("../../controllers/booking.controller");
const router = express.Router()

router
.route("/")
.post(bookingController.postAbooking)

module.exports = router;