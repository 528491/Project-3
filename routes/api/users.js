const router = require("express").Router();
const usersController = require("../../controllers/usersController");
// const User = require("../../models/user");
const models = require("../../models");
const userSchema = require("mongoose").model("User").schema;

console.log("We are in server.js");

  // .post(usersController.signUp({username: "req.body.username", password: "req.body.password"}), "response");
router.post("/", function(req, res) {

  console.log(req.body);
  // console.log("hit route.");
  // var userData = new models.User({
  //   username: req.body.username,
  //   password: req.body.password
  // });

  // var userData = mongoose.model("userData",User);
  var userData = new models.User({
    email: req.body.email,
    password: req.body.password
  });
  userData.save(function(err) {
    if (err) return err;
  })
  .then(item => {
    res.send("item saved to database");
  })
  .catch(err => {
    res.status(400).send("unable to save to database");
  });


});


module.exports = router;