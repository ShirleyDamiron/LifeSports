

const router = require('express').Router();
let User = require('../models/user.model');

// Your Challenge: Make rwo routes. Each will use mongojs methods

// 1. get all users on record
// GET: /
router.get("/", async (req, res) => {
  try{
    const users = await User.find()
    res.send(users)
  }
  catch (err) {
    res.status(500).json({ message: err.message})
  }
})
  
  

// 2. add a new user
// POST: /

router.post("/add", async (req, res) => {
  try{
    const users = new User(req.body)
    const result = await users.save();
    res.send(result)
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router;