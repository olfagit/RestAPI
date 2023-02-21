const express = require("express")
const ConnectDB = require("./config/ConnectDB")
const UserRoutes = require("./routes/UserRoutes")

const app = express()

ConnectDB()

app.use(express.json())

app.use("/api/user" , UserRoutes)

const PORT = 5000

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))