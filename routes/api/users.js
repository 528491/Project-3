const router = require("express").Router();
const usersController = require("../../controllers/usersController");
console.log("We are in server.js");

  // .post(usersController.signUp({username: "req.body.username", password: "req.body.password"}), "response");
router.post("/", function(req, res) {
  console.log("hit route.");
});


module.exports = router;