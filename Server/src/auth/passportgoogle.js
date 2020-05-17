
const GoogleStrategy = require('passport-google-token').Strategy
const User = require("../model/user");

module.exports = function (passport) {
  passport.use(
    "googleToken",
    new  GoogleStrategy(
      {
        clientID:
          "54235386138-lkdiqa84ait3pqf7m7ectrjrc80n0o5a.apps.googleusercontent.com",
        clientSecret: "xdMQtgjUIWQ0pXCk6GPHnvFG",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log("profile", profile._json.picture);
          var existUser = await User.findOne({
            where: {
              social_id: profile.id,
            },
          });
          if (!existUser) {
            var novoUser = {
              social_id: "",
              nome: "",
              email: "",
              img: "",
            };
            novoUser.social_id= profile.id;
            novoUser.nome = profile.displayName;
            novoUser.email = profile._json.email;
            novoUser.img =  profile._json.picture;
            const { social_id, nome, email, img } = novoUser;
            const user = await User.create({
              social_id,
              nome,
              email,
              img,
            });
            //console.log("novoUser", user);
            return done(null, user);
          } else {
            //console.log("usuario", existUser);
            return done(null, existUser);
          }
        } catch (erro) {
          done(erro, false, erro.message);
        }
      }
    )
  );
};
