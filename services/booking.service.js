const bookingModel = require('../models/booking.model')


// save a booking service -----------------------------
exports.saveAbookingService=async(data)=>{
    const result = await bookingModel.create(data)
    return result
}

// get all booking data -------------------------------
exports.getAllBookingService =async ()=>{
    const result = await bookingModel.find({})
    return result
}

// delete a booking data ------------------------------
exports.deleteAbookingService= async(id)=>{
    const result = await bookingModel.deleteOne({_id : id})
    return result
}

// update a booking data ------------------------------
exports.updateAbookingService =async(id,data)=>{
    const result = await bookingModel.updateOne({_id: id},{$set: data})
    return result
}

// get a single booking by id--------------------------
exports.getAsingleBookingService = async(id)=>{
        const result = await bookingModel.findById(id)
        return result
}