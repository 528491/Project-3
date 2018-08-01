const router = require("express").Router();
const userRoutes = require("./users.js");

// test routes
router.use("/users", userRoutes);

module.exports = router;
