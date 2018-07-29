const router = require("express").Router();
const booksController = require("../../controllers/testController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll())


module.exports = router;
