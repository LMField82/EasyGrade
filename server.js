const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv")(
    process.env.DB_PASSWORD
);
const pass = dotenv();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}else {
  app.use(express.static("client/public"))
}

// const passport = require('./config/passport');

// app.use(passport.initialize())
// app.use(require('./routes'))


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "easy-grade-db"
});

connection.connect(err => {
    (err) ? console.log("error", err) : console.log("connection");
});

app.listen(PORT, function () {

  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!!!`);

});
