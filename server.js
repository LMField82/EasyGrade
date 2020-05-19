//Dependencies
const express = require("express");
const mysql = require("mysql");

//Setting up express app
const app = express();
const PORT = process.env.PORT || 3001;

//Requiring our models for syncing
const db = require("./models");

//Setting up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static Directories
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}else {
  app.use(express.static("client/public"))
}

//Setting up authentication
// const passport = require('./config/passport');
// app.use(passport.initialize())
// app.use(require('./routes'))

//Routes
require("./routes")
//require("./routes/html-routes.js")(app);

//Syncing sequelize models and starting express app
db.sequelize.sync({ force: true }).then(function() {
  connection.connect(err => {
    (err) ? console.log("error", err) : console.log("connection");
  });
  app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!!!`);
  });

});
