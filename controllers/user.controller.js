const userModel = require('../models/user.model')
const { getAsingleBookingService } = require('../services/booking.service')
const { saveUserService, getAllUserService, deleteAuserService, updateAuserService } = require('../services/user.service')


// post user data --------------------------
exports.saveAuser =async (req, res, next)=>{
    try {
        
        const result = await saveUserService(req.body)
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

// get all user data ---------------------------
exports.getAllUser = async(req, res, next)=>{
    try {
        const result = await getAllUserService()
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

// delete a user data ---------------------------
exports.deleteAuser =async(req, res, next)=>{
    try {
        const id = req.params.id
        const result = await deleteAuserService(id)
        res.status(200).json({
            status: 'success',
            massage: "Data deleted Successfully!",
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

// update a user data ------------------------
exports.updateAuser = async(req,res,next)=>{
    try {
    const id = req.params.id 
    const body = req.body 
    const result = await updateAuserService(id,body)  
    res.status(200).json({
        status: 'success',
        massage: "Data deleted Successfully!",
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

