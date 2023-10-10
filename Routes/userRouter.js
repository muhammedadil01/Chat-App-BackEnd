const express = require("express")
const { loginController, registerController } = require("../controller/userController")

const router = express.Router()

router.route("/login").post(loginController)
router.route("/register").post(registerController)

module.exports = router