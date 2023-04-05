const userModel = require('../models/user.model')
const { saveUserService } = require('../services/user.service')

exports.saveAuser =async (req, res, next)=>{
    try {
        
        const result = await saveUserService(req.body)
        console.log(result)
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