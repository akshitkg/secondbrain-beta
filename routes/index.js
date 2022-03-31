<<<<<<< HEAD
const express = require("express");
// const app=express()
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

module.exports = router;
=======
const router= require("express").Router();

router.get('/',(req,res)=>{
    res.render('home.ejs')
})


module.exports=router;
>>>>>>> development
