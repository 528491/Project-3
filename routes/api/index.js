const router = require("express").Router();
const testRoutes = require("./tests");

// test routes
router.use("/tests", testRoutes);

module.exports = router;
