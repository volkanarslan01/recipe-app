const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
