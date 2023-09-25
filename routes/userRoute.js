const express = require("express")

const router = express.Router()

const {signup} = require("../controllers/userControllers")

// router.route("/signup").post(signup)

router.post("/signup", signup)

module.exports = router