const express = require("express");
const  productController  = require("../../controllers/product.controller");
const router = express.Router()

router
.route("/")
.post(productController.saveAproduct)

module.exports = router;