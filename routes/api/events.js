const router = require("express").Router();
const eventController = require("../../controllers/eventController");
// const User = require("../../models/user");
const Event = require("../../models/event");
// const models = require("../../models");
// const userSchema = require("mongoose").model("User").schema;

// console.log("We are in server.js");

// router.post("/login", usersController.login);
// router.post("/", usersController.signUp);

// Corresponds to "api/events"
// router.post("/", eventController.addEvent);

router.route("/:year:month:day")

module.exports = router;
