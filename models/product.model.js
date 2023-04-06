const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a name"],
        trim: true,
        unique: true,
        minLength: [3, "provide at-least 3 character"],
        maxLength: 100
    },
    price :{
        type : Number,
        required: true,
        min: [0, "Price must be a Number"],
        validate: {
          validator :(value)=>{
            const isInteger = Number.isInteger(value)
            if(isInteger){
              return true
            }else{
              return false
            }
          },
          message: "Number Must Be a Integer Number"
        }
      },
      condition :{
        type: String,
        required: true,
        enum: {
            values:['excellent','good','fair'],
            message: `unit value must be {VALUE}, value must be excellent/good/fair`
        }
      },
      phone: {
        type: String,
        required : true,
        min: [11, "Please provide at least 11 digit"],
        max: [11, "Please provide at least 11 digit"]
      },
      location: {
        type: String,
        required: true,
        trim: true
      },
      category : {
        type : String,
        required: true,
        enum :{
            values : ["HP","Dell","Macbook"],
            message: `unit value must be {VALUE}, value must be HP/Dell/Macbook`
        }
      },
      description :{
        type : String,
        required : true
      },
      yearOfPurchase :{
            type : Date,
            default : Date
      }

},{
    timestamps : true
})

const productModel =  mongoose.model("productModel",productSchema)

module.exports = productModel;