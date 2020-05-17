const express = require("express");
const Router = express.Router();
const passport = require("passport");

//Declarações dos controladores relacionados a usuário
const UserController = require("../src/controllers/UserController");


//rotas para usuarios
    //-------------------------------------------------------//
        //rota para criar usuario
        Router.route("/user/cria").post(UserController.store);

    //-------------------------------------------------------//

    //router.router("/user/list").get(User)

    //--------------------------------------------------------//
    //rota para login do usuario com o facebook

        Router
        .route("/auth/facebook")
        .post(
        passport.authenticate("facebookToken", { session: false }),
        UserController.facebookoAuth
        );
    //rota para login do usuario com o google

        Router
        .route("/auth/google")
        .post(
        passport.authenticate("googleToken", { session: false }),
        UserController.googleoAuth
        );

    //rota para login de usuario com atenticação local do banco de dados da MOP

    //rota para login de usuario com atenticação local do banco de dados da SigMed
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