const express        = require("express");
const bodyParser     = require("body-parser");
const mongoose       = require("mongoose");
const routes         = require("./routes");
const app            = express();
const path           = require("path");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  
// }

// Enable CORS from client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(routes);
app.use(express.static("client/build"));

// If no API routes are hit, send the React app
// app.use(express.static("client/build")); //If no other routes are hit, serve the react client
// app.get("*", function(req, res){
//     //app.use(express.static("nytreact-client/build")); //If no other routes are hit, serve the react client
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
//     //The problem with sending only index.html, which does work, is that none of the javascript loads.
// });

// Connect to the Mongo DB
require("./config/databaseImplementation");

module.exports = app; //Necessary for testing

// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });

