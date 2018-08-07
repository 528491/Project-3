const router = require("express").Router();
const testController = require("../../controllers/testController");

// Matches with "/api/tests"
router.route("/")
  .get(testController.findAll);

module.exports = router;
