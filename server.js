const express        = require("express");
const bodyParser     = require("body-parser");
const mongoose       = require("mongoose");
const routes         = require("./routes");
const app            = express();
const session        = require("express-session");
const passport 			 = require("./config/passport");
const authCheck      = require("./config/middleware/attachAuthenticationStatus");
const path           = require("path");


const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
/*
This block is commented out as I want to see if a "catch-all" type routing hierarchy will serve us better.
This is the method employed in react hw #2. The only change is that we place this app.use AFTER app.use(routes)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
*/
// Add routes, both API and view
// app.post("/api/users", function(req, res) {
//   console.log("hit route.");
// });

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(session({ secret:"lies lies lies so many lies", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

require("./config/databaseImplementation");

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/testdb");
app.use(routes);
app.use(express.static("client/build"));
app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
