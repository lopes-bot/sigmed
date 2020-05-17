//const GooglePlusTokenStrategy = require("passport-google-plus-token");
const GoogleStrategy = require('passport-google-token').Strategy
const User = require("../model/user");

module.exports = function (passport) {
  passport.use(
    "googleToken",
    new  GoogleStrategy(
      {
        clientID:
          "973513541331-pifal1l076to1d51a2nbsfl2m84dq8bj.apps.googleusercontent.com",
        clientSecret: "oMclV_407fDMA_XKQpDTN9OX",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          //console.log("profile", profile);
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
            novoUser.email = profile.emails[0].value;
            novoUser.img = profile.photos[0].value;
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
