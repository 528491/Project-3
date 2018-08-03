const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const User = require("../../models/user");
// const models = require("../../models");
// const userSchema = require("mongoose").model("User").schema;

console.log("We are in server.js");

  // .post(usersController.signUp({username: "req.body.username", password: "req.body.password"}), "response");
// router.post("/", function(req, res) {

  // console.log(req.body);
  // console.log("hit route.");
  // var userData = new models.User({
  //   username: req.body.username,
  //   password: req.body.password
  // });

  // var userData = mongoose.model("userData",User);
  // var userData = new User({
  //   email: req.body.email,
  //   password: req.body.password
  // });

  // const newUser = new User();
  // newUser.email = req.body.email;
  // newUser.password = req.body.password;

  // userData.save(function(err) {
  //   if (err) return err;
  // })

  // newUser.save()
  // .then(() => {
  //   res.send("item saved to database");
  // })
  // .catch(err => {
  //   res.status(400).send("unable to save to database");
  // });

  // newUser.markModified("email");
  // newUser.markModified("password");
  // newUser.save((err, user) => {
  //   if (err) {
  //     res.status(400).send("Server error.");
  //   }

  //   // res.send("Signed up.");
  //   // console.log("Signed up.");
  //   else {
  //     res.send("Signed up.");
  //   }
  // })


// });

router.post("/", usersController.signUp);


module.exports = router;