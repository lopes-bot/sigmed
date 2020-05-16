const express = require("express");
const Router = express.Router();

//Declarações dos controladores relacionados a usuário
const UserController = require("../src/controllers/UserController");



//-------------------------------------------------------//
Router.post("/user/cria",UserController.store);

//-------------------------------------------------------//

//router.router("/user/list").get(User)


module.exports = Router;