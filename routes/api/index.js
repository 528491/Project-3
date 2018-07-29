const router = require("express").Router();
const bookRoutes = require("./tests");

// Book routes
router.use("/", bookRoutes);

module.exports = router;
