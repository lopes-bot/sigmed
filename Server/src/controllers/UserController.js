const User = require("../model/user")

 module.exports = {



//-----------------------------------//
 async store(req,res){
     const {
         nome,email,senha,img
     } = req.body;

     console.log('tag', req.body);
 }

//-----------------------------------//

}