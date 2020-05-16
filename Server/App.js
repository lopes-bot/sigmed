const express = require('express');
require("./src/database/index");

const AdminUser = require('./router/User');
const bodyParser = require("body-parser");


const app = express();


app.use(express.urlencoded({extended:false}))
app.use(express.json());
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get("/",(req,res)=>{

    res.send("pagina inicial");

})

app.use("/admin",AdminUser  );


const Port = 8080;
app.listen(Port,()=>{
    console.log('sevidor rodanddo na url http://localhost:8080' );
})