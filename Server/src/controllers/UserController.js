const User = require("../model/user");
const bcrypt = require("bcryptjs");

 module.exports = {


//-----------------------------------------------------------------------------------//
            async store(req, res) {

                const user_email = await User.findOne({
                where: {
                    email: req.body.email,
                },
                });


                if (user_email) {
                return res.status(400).json({
                    erro: true,
                    messege: "já exite usuario com esse email",
                });
                }


                var valores = req.body;
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(valores.senha, salt);
                valores.senha = hash;

                const { nome, email, senha, img } = valores;

                const user = await User.create({
                nome,
                email,
                senha,
                img,
                });

                return res.json(user);
            }, //metodo usado para criar usuarios
//------------------------------------------------------------------------------------//
  }