const FacebookTokenStrategy = require("passport-facebook-token");
const User = require("../model/user");
module.exports = function (passport) {
  passport.use(
    "facebookToken",
    new FacebookTokenStrategy(
      {
        clientID: "841869212975410",
        clientSecret: "c9047e0027f132f5746089c3fcf1f4bc",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log("profile", profile);
          var existUser = await User.findOne({
            where: {
              social_id: profile.id,
            },
          });
          console.log("usuario exite "+profile.id);
          if (!existUser) {
            var novoUser = {
              social_id: "",
              nome: "",
              email: "",
              img: "",
            };
            novoUser.social_id = profile.id;
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
