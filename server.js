if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const expressLayouts = require("express-ejs-layouts");
// require("dotenv").config();

// Import Routes
const indexRouter = require("./routes/index");
// const homeRouter=require('/')

// Middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");
// app.set("views", __dirname + "views/");
// app.set("views", "views/");
app.use(expressLayouts);
app.use(express.static(__dirname + "public"));

// Database Connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}),
  
console.log("Connected!!!");
const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("Database connected!");
});

// Route Handlers
app.use("/", indexRouter);
// app.get('/home', ) \\

// Run server
app.listen(process.env.PORT || 3000);
