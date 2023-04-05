const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a name"],
        trim: true,
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
    role: {
        type: String,
        required: true,
        enum: {
            values: ["Admin", "Buyer", "Seller"],
            massage: "role can't be others."
        }
    },
});

const userModel = mongoose.model("userModel",userSchema)

module.exports = userModel;