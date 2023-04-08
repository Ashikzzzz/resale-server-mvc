const productModel= require("../models/product.model")

// save a product to database ------------------------------
exports.saveAproductServices=async(data)=>{
    const result = await productModel.create(data)
    return result;
}