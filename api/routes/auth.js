const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Sign up
router.post("/register", async (req, res) => {
  try {
    // grab data from request body
    const { username, email, password } = req.body;
    // hash the password
    // const salt = bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 10);
    // construct user
    const newUser = new User({ username, email, password: hashedPassword });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login

// export
module.exports = router;
