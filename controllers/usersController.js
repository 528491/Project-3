// const passport = require('passport');
const User       = require('../models/user');


module.exports = {
  signUp: function(req, res){
    // console.log("req.body");
    // res.send("<h1>Succesffully hit the usersController</h1>");

    const newUser = new User();

    newUser.email = req.body.email;
    newUser.password = req.body.password;

    newUser.save()
    .then(function() {
      res.send({success:true});
    })
    .catch(function(err) {
      res.json(err);
    });
  }  
};