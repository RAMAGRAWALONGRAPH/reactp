const express = require("express")

const router = express.Router()
const { createPost, updatePost , getPosts, deletePost} = require("../controllers/postControllers")

const isLoggedIn = require("../middleware/isLoggedIn")

router.post("/create", isLoggedIn, createPost )
router.put("/updatePost/:id", isLoggedIn, updatePost)
router.get("/getPosts", isLoggedIn, getPosts)
router.delete("/deletePost/:id", isLoggedIn, deletePost)


module.exports = router
