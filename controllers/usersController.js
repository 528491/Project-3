// const passport = require('passport');
const User       = require('../models/user');
const Session    = require('../models/session');

module.exports = {

  // Function for registering a user on the website.
  signUp: function(req, res){

    // Attempts to find one username that matches the req.body.username.
    User.findOne({ 'email' :  req.body.email }, function(err, user) {

      // If the email the user specified is already in the database
      if (user) {
        res.send ({duplicateUser: true})
      }

      // If the user's email is NOT in the database
      else {

        // console.log("req.body");
        // res.send("<h1>Succesffully hit the usersController</h1>");

        // Create a new User instance
        const newUser = new User();
        newUser.email = req.body.email.toLowerCase().trim();
        // newUser.password = req.body.password;
        newUser.password = newUser.generateHash(req.body.password);

        // Saves the user to the database.
        newUser.save()
        .then(function() {
          res.send({success:true});
        })
        .catch(function(err) {
          res.json(err);
        });

      }
    })
  },

  ////////////////////////////////////////////////////////////////////////////////


  // Function for logging in user to the website.
  login: function(req, res){
    console.log("Currently inside usersController login function");

    // email and password variable will be specified by lines of code (req.body)
    let { email, password } = req.body;

    // makes email field lowercase
    email = email.toLowerCase();

    // If there is no "email" variable (If this field is blank maybe)
    if(!email) {
      return res.send({
        success: false,
        message: "Email cannot be blank."
      })
    }

    // Same as above, but for password field
    if(!password) {
      return res.send({
        success: false,
        message: "Password cannot be blank."
      });
    }

    // Find an email with the user's email.
    User.find({
      email: email
    }, (err, users) => {

      // If there is a general error
      if(err) {
        console.log(err);
        res.send({
          success: false,
          message: "Mongo Error",
          error: err
        })
      }

      console.log(users);

      // If there isn't exactly one of the user's email in the database
      // Safeguard against duplicates in the database
      if(users.length != 1) {
        console.log("users: ", users);
        return res.send({
          success: false,
          message: 'Error: Invalid',
          
          // Error will have an array of the duplicate users
          error: ["User find error", ...users]
        })
      }

      const user = users[0];

      // If the user doesn't have a valid password
      if(!user.validPassword(password)) {
        console.log("p dub fail")
        return res.send({
          sucess: false,
          message: "Error: Invalid"
        });
      }

      // User's token
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
