const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/dataBase")
const router = require("./Routes/userRouter")
const cors = require('cors')

const app = express()
dotenv.config()
connectDB();
app.use(express.json())
app.use(
  cors({
    origin:"http://localhost:3000",
    credentials: true
}))

app.use("/user",router)

app.get("/",(req,res)=>{
  res.send("port is Running..")
})
const PORT = process.env.PORT || 8080
app.listen(PORT,console.log("server is Running..."))