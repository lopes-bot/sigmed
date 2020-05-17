const express = require("express");
const Router = express.Router();
const passport = require("passport");

//Declarações dos controladores relacionados a usuário
const UserController = require("../src/controllers/UserController");



//-------------------------------------------------------//
Router.post("/user/cria",UserController.store);

//-------------------------------------------------------//

//router.router("/user/list").get(User)

//--------------------------------------------------------//
//rota para login de usuario com atenticação local do banco de dados da MOP
      //rota para autenticação do login usando o passport com estrategia local

      Router.post("/login", (req, res, next) => {
        passport.authenticate("local", {
          successRedirect: "/", //se autenticar com sucesso e direcionado para rota principal
          failureRedirect: "/login", //se autanticação falhar redireciona para a rota /login
          failuFlash: true,
        })(req, res, next);
      }); 
//---------------------------------------------------------------------//
   //rota para logout 
   Router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  }); 


module.exports = Router;