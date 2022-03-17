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
    // await mongoose.connect(process.env.MONGO_URI_2, connectionString);
    // console.log("Connection established");
    // const conn = mongoose.connection;
    // const db = 
    res.send(`Noice`);
  } catch (error) {
    console.error(error);
  } finally {
    // await mongoose.disconnect();
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
  }
});

module.exports = router;
