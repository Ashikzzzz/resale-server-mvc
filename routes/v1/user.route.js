const express = require("express");
const  userController  = require("../../controllers/user.controller");
const router = express.Router()

// user route -----------------------
router
.route("/")
.post(userController.saveAuser)
.get(userController.getAllUser)

router.route('/:id')
.delete(userController.deleteAuser)
.patch(userController.updateAuser)



module.exports = router;