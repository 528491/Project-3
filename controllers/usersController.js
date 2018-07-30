const passport = require('passport');

module.exports = {
  signUp: function(req, res){
    console.log(req.body);
    res.send("<h1>Succesffully hit the usersController</h1>");
  }  
};