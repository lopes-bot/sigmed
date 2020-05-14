const express = require('express');

const app = express();




app.get("/",(req,res)=>{

    res.send("pagina inicial");

})


const Port = 8080;
app.listen(Port,()=>{
    console.log('sevidor rodanddo na url http://localhost:8080' );
})