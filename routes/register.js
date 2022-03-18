const router = require("express").Router();
const passport = require("passport");
const localStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const users=[]

router.get("/", (req, res) => {
  res.render("auth/register");
});

router.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    res.redirect('/login')
  } catch (err) {
    console.log(err);
    res.redirect('/register')
  }
  console.log(users)
});

module.exports = router;
