const router = require("express").Router();
const testRoutes = require("./tests");
const userRoutes = require("./users");


// test routes
// router.use("/tests", testRoutes);
router.use("/users", userRoutes);


module.exports = router;
