const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user_db = require("../model/mongoDBhandler.js");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await user_db.findOne({ username });

  if (user) {
    return res.json({ message: "User already exits" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new user_db({ username: username, password: hashedPassword });
  newUser.save();
  res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {});

module.exports = router;
