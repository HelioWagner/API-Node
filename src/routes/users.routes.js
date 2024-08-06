const { Router } = require('express')

const usersRoutes = Router()

const UsersController = require("../controllers/usersController")
const usersController = new UsersController()

usersRoutes.post("/",usersController.create)
usersRoutes.put("/:id",usersController.update)


usersRoutes.get("/",(request,response) => {
     const {name,email,password} = request.body
     response.json(name);
 })



module.exports = usersRoutes