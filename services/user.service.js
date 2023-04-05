const userModel = require('../models/user.model')

exports.saveUserService = async(data)=>{
const result = await userModel.create(data)
console.log(result)
return result
}