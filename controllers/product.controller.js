const productModel = require("../models/product.model")
const { saveAproductServices } = require("../services/product.services")

// post a product --------------------------------------
exports.saveAproduct = async(req,res,next)=>{
    try {
        
        const result =await saveAproductServices(req.body)
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