const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const User = require("../../models/user");
// const models = require("../../models");
// const userSchema = require("mongoose").model("User").schema;

console.log("We are in server.js");

router.post("/", usersController.signUp);
router.get("/login", usersController.login);

module.exports = router;