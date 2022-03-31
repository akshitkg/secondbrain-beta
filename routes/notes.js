<<<<<<< HEAD
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Note = require("../models/noteModel");
const connectionString = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// require("dotenv").config();

// mongoose.connect(process.env.MONGO_NOTES_URI, () => {
//   console.log("Connected with database notes!");
// });
// const notes_db = mongoose.connection;

// Notes Home page route
router.get("/", async (req, res) => {
  const db = await mongoose.createConnection(
    process.env.MONGO_URI,
    { keepAlive: true, keepAliveTimeout: 300000 },
    () => {
      console.log("Connected to Database!");
    }
  );

  // const notes = db.collection("notes_collection").find({});
  res.send("zebra");
});

router.get("/alldb", async (req, res) => {
  try {
    await mongoose.connect(process.env.AIRBNB_DB_URI, connectionString);
    console.log("Connection established");
    const conn = mongoose.connection;
    // const db = 
    res.send(`Noice`);
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected Successfully!");
  }
});

// New Note GET route
router.get("/new", (req, res) => {});

// New Note POST route
router.post("/", async (req, res) => {
  let note = new Note({
    note: req.body.note,
  });
  try {
    const note1 = await note.save();
    // console.log(note);
    // res.send(note.note);
    // res.send(note1)
  } catch (e) {
    console.log(e);
=======
const router = require("express").Router();
const Notes = require("../models/Notes");
const Note = require("../models/Notes");

router.get("/", async (req, res) => {
  try {
    await Note.find({ noteId: req.session.userId }, (err, allUserNotes) => {
      if (err) {
        return res
          .status(404)
          .send("Something went wrong in fetching from database");
      }
      console.log(allUserNotes);
      res.render("notes/notes",{allUserNotes: allUserNotes});
      console.log(req.headers)
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/new", async (req, res) => {
  try {
    console.log("Try initiated");
    const newNote = await req.body.newNote;4
    const id = await req.session.userId;
    const note = await new Note({
      noteId: id,
      note: newNote,
    });
    console.log("note constant created");
    await note.save();
    res.redirect("/notes");
    console.log(req);
  } catch (err) {
    console.log(err);
>>>>>>> development
  }
});

module.exports = router;
