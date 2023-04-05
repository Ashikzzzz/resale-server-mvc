const userModel = require('../models/user.model')


// save a user service -------------------------
exports.saveUserService = async(data)=>{
const result = await userModel.create(data)
return result
}

// get all user  service ----------------------
exports.getAllUserService= async()=>{
    const result = await userModel.find({})
    return result
}

// delete a user data ---------------------------
exports.deleteAuserService=async(id)=>{
    const result = await userModel.deleteOne({_id : id})
    return result
}

// update a user data ----------------------------
exports.updateAuserService = async(id,data)=>{
    const result = await userModel.updateOne({_id : id}, {$set: data})
    return result
}