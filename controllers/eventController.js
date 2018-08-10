// const passport = require('passport');
// const User       = require('../models/user');
const Event = require("../models/event");
// const Session    = require('../models/session');

module.exports = {
//   signUp: function(req, res){
//     // console.log("req.body");
//     // res.send("<h1>Succesffully hit the usersController</h1>");

//     const newUser = new User();

//     newUser.email = req.body.email.toLowerCase().trim();
//     // newUser.password = req.body.password;
//     newUser.password = newUser.generateHash(req.body.password);

//     newUser.save()
//     .then(function() {
//       res.send({success:true});
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
//   },

  addEvent: function(req, res) {
    const newEvent = new Event();

    // newEvent.date = req.body.date;
    newEvent.year = req.body.year;
    newEvent.month = req.body.month;
    newEvent.day = req.body.day;
    newEvent.guardianName = req.body.guardianName;
    newEvent.userEvent = req.body.userEvent;

    newEvent.save()
    .then(function() {
      res.send({success:true});
    })
    .catch(function(err) {
      res.json(err);
    });
  }
};
