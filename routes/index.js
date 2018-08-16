const path = require("path");
const express = require("express");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(express.static("client/build")); //If no other routes are hit, serve the react client
// router.get("*", function(req, res){
//     //app.use(express.static("nytreact-client/build")); //If no other routes are hit, serve the react client
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
//     //The problem with sending only index.html, which does work, is that none of the javascript loads.
// });
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
