const express = require('express');
const app = express();
require("./src/database/index");

const AdminUser = require('./router/User');
//const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
require('./src/auth/passport')(passport);
require('./src/auth/passportface')(passport);


//sessão
app.use(
    session({
      secret: "SigMed",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
 
  



app.use(express.urlencoded({extended:false}))
app.use(express.json());



//middleware
app.use((req, res, next) => {
 
    res.locals.user = req.user || null; //dados do usuario autenticado pelo passport e armazenado nessa variavel global
    next();
 });
  



app.get("/",(req,res)=>{

    res.send("pagina inicial");

})

app.use("/admin",AdminUser  );


const Port = 8080;
app.listen(Port,()=>{
    console.log('sevidor rodanddo na url http://localhost:8080' );
})