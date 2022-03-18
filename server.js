if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const expressLayouts = require("express-ejs-layouts");
// require("dotenv").config();


// Models
// const noteModel=require("./models/note");


// const homeRouter=require('/')

// Middlewares
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false, limit: "10mb" }));
app.use(express.static(__dirname + "public"));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");

// Database Connection START


// Database connection END

// Route Handlers
app.use("/", require("./routes/index"));
app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));
app.use("/notes", require("./routes/notes"));

// Run server
app.listen(process.env.PORT || 3000);
