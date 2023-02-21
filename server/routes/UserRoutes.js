const express = require("express")
const UserRoutes = express.Router()
const { AddUser, getUser, EditUser, DeletUser } = require("../controllers/UserControllers")


UserRoutes.post("/add" , AddUser)
UserRoutes.get("/all" , getUser)
UserRoutes.put("/edit/:id" , EditUser)
UserRoutes.delete("/del/:id" , DeletUser)

module.exports = UserRoutes
