const express = require('express');
require("./src/database/index");


const app = express();


app.use(express.urlencoded({extended:false}))



app.get("/",(req,res)=>{

    res.send("pagina inicial");

})


const Port = 8080;
app.listen(Port,()=>{
    console.log('sevidor rodanddo na url http://localhost:8080' );
})