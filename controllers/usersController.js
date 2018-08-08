// const passport = require('passport');
const User       = require('../models/user');
const Session    = require('../models/session');

module.exports = {
  signUp: function(req, res){
    // console.log("req.body");
    // res.send("<h1>Succesffully hit the usersController</h1>");

    const newUser = new User();

    newUser.email = req.body.email.toLowerCase().trim();
    // newUser.password = req.body.password;
    newUser.password = newUser.generateHash(req.body.password);

    newUser.save()
    .then(function() {
      res.send({success:true});
    })
    .catch(function(err) {
      res.json(err);
    });
  },

  login: function(req, res){
    console.log("Currently inside usersController login function");
    let { email, password } = req.body;
    email = email.toLowerCase();

    if(!email) {
      return res.send({
        success: false,
        message: "Email cannot be blank."
      })
    }

    if(!password) {
      return res.send({
        success: false,
        message: "Password cannot be blank."
      });
    }



    User.find({
      email: email
    }, (err, users) => {

      if(err) {
        console.log(err);
        res.send({
          success: false,
          message: "Mongo Error",
          error: err
        })
      }

      console.log(users);
      if(users.length != 1) {
        console.log("users: ", users);
        return res.send({
          success: false,
          message: 'Error: Invalid',
          error: ["User find error", ...users]
        })
      }

      const user = users[0];

      if(!user.validPassword(password)) {
        console.log("p dub fail")
        return res.send({
          sucess: false,
          message: "Error: Invalid"
        });
      }

      const token = Session.generateToken(user);

      console.log("logged in");
      return res.send({
        success: true,
        message: 'Valid sign in',
        token: token,
        user: user
      });

   });




  }
};
