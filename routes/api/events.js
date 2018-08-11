const router = require("express").Router();
const eventController = require("../../controllers/eventController");
const Event = require("../../models/event");

// What to do when app sends a POST request to "api/events"
// Will run "addEvent" method.
router.post("/", eventController.addEvent);

// What to do when app sends a GET request to "api/events"
// Will run "findAll" method
router.get("/", eventController.findAll);

// router.delete("/", eventController.remove);

router.route("/:id")
    .delete(eventController.remove);

module.exports = router;
