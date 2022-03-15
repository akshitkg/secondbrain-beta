const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

// Notes Home page route
router.get("/", (req, res) => {
  res.render("notes.ejs");
});

// New Note GET route
router.get("/new", (req, res) => {
  res.render("createNote", { note: new Note() });
});

// New Note POST route
router.post("/", (req, res) => {
    res.render('notes', {note: req.body.note});
});

module.exports = router;
