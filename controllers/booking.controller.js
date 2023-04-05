const  bookingModel= require('../models/booking.model')
const { saveAbookingService } = require('../services/booking.service')


// save a booking ------------------------
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
