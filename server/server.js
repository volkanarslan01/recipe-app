const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./router/usersRoute.js");

const recipesRouter = require("./router/recipesRoute.js");
app.use(express.json());
app.use(cors());
app.use("/", userRouter);
app.use("/recipes", recipesRouter);
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
