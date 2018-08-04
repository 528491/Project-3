// const passport = require('passport');
const User       = require('../models/user');
const passport = require("passport");

module.exports = {
  signUp: function(req, res){
    // console.log("req.body");
    // res.send("<h1>Succesffully hit the usersController</h1>");

    const newUser = new User();

    newUser.email = req.body.email;
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
    return passport.authenticate('local', (err, token, userData) => {
      if (err) {
        console.log(err);
        if (err.name === 'IncorrectCredentialsError') {
          return res.status(400).json({
            success: false,
            message: err.message
          });
        }
  
        return res.status(400).json({
          success: false,
          message: 'Could not process the form.'
        });
      }
  
      console.log(token, "this is the token in users_api.js");
      console.log(userData, "this is the userData in users_api.js");
  
      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        token,
        user: userData
      })
    });
    
  }};
