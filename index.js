const cookieParser = require('cookie-parser')
const express = require("express")
const userRouter = require("./routes/userRoute")
const postRouter = require("./routes/postRoute")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cookieParser())

app.use("/api", userRouter)
app.use("/api", postRouter)


app.get("/", (req, res) =>{
    res.send("hello")
})

app.listen(5000, () =>{
    console.log("server is running on port 5000")
})