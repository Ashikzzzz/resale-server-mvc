const express = require("express");
const  bookingController  = require("../../controllers/booking.controller");
const router = express.Router()

router
.route("/")
.post(bookingController.postAbooking)
.get(bookingController.getAllBooking)

router
.route("/:id")
.get(bookingController.getAsingleBooking)
.delete(bookingController.deleteAbooking)
.patch(bookingController.updateAbooking)


module.exports = router;