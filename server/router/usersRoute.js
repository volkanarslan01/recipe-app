const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user_db = require("../model/mongoDBhandler.js");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const user = await user_db.findOne({ username });

  if (user) {
    return res.json({ message: "User already exits" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new user_db({ username: username, password: hashedPassword });
  newUser.save();
  res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await user_db.findOne({ username });

  if (!user) {
    return res.json({ message: "User not found" });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.json({ message: "Username or password is incorrect" });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token: token, user_ID: user._id });
});

module.exports = router;
