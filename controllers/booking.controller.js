const  bookingModel= require('../models/booking.model')
const { saveAbookingService, getAllBookingService, deleteAbookingService, updateAbookingService, getAsingleBookingService } = require('../services/booking.service')


// save a booking -----------------------------------
exports.postAbooking=async(req, res, next)=>{
    try {
        
        const result = await saveAbookingService(req.body)
        // console.log(result)
        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    }
     catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
}

// get all booking -------------------------------------
exports.getAllBooking=async(req,res,next)=>{
    try {
    const result = await getAllBookingService()  
    res.status(200).json({
        status: 'success',
        massage: "Data Get Successfully!",
        data: result
    })
    }
     catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data Get Error",
            error: error.message
        })
    }
}

// delete a booking data -------------------------------
exports.deleteAbooking=async(req,res,next)=>{
    try {
        const id = req.params.id 
        const result = await deleteAbookingService(id)
        res.status(200).json({
            status: 'success',
            massage: "Data delete Successfully!",
            data: result
        })
    } 
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data Get Error",
            error: error.message
        })
    }
}
// update a booking data ----------------------------------
exports.updateAbooking = async (req, res, next)=>{
    try {
        const id = req.params.id 
        const body = req.body 
        const result = await updateAbookingService(id,body)
        res.status(200).json({
            status: 'success',
            massage: "Data update Successfully!",
            data: result
        })
    }
     catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data Get Error",
            error: error.message
        })
    }
}

// get a single booking ---------------------------------
exports.getAsingleBooking=async(req, res, next)=>{
    try {
       const id = req.params.id
       const result = await getAsingleBookingService(id)
        res.status(200).json({
            status: 'success',
            massage: "Data get Successfully!",
            data: result
        })
    } 
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data get Error",
            error: error.message
        })
    }
}