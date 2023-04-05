const bookingModel = require('../models/booking.model')


// save a booking service --------------------
exports.saveAbookingService=async(data)=>{
    const result = await bookingModel.create(data)
    return result
}

// get all booking data -----------------------
exports.getAllBookingService =async ()=>{
    const result = await bookingModel.find({})
    return result
}
