const router = require("express").Router();
const testRoutes = require("./tests");
const userRoutes = require("./users");
const eventRoutes = require("./events");


// test routes
// router.use("/tests", testRoutes);
router.use("/users", userRoutes);
router.use("/events", eventRoutes);
router.use('/tests', testRoutes);


module.exports = router;
