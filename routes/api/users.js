const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const User = require("../../models/user");
// const models = require("../../models");
// const userSchema = require("mongoose").model("User").schema;

console.log("We are in server.js");

router.post("/login", usersController.login);
router.post("/", usersController.signUp);

module.exports = router;
