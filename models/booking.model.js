const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a name"],
        trim: true,
        unique: true,
        minLength: [3, "provide at-least 3 character"],
        maxLength: 100
    },
    email: {
        type: String,
        required: [true, "Please provide a email address."],
        trim: true, // without spaces
        unique: [true, "Please provide a unique email address."],
        validate: {
            validator: () => {Promise.resolve(false)},
            message: 'Email validation failed'
        }
    },
    itemName: {
        type: String,
        required: [true, "please provide a name"],
        trim: true,
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
      }
},{
    timestamps: true
})

const bookingModel = mongoose.model("bookingModel",bookingSchema)

module.exports = bookingModel;