const express = require("express");
const mongoose = require("mongoose");
const user = require("../model/mongoDBhandler.js");
const recipes = require("../model/recipes.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await recipes.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const recipe = new recipes(req.body);
  console.log(recipe);
  try {
    await recipe.save();
    res.json(recipe);
  } catch (err) {
    res.json(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const recipe = await recipes.findById(req.body.recipeID);
    const users = await user.findById(req.body.userID);
    users.savedRecipes.push(recipe);
    await users.save();
    res.json({ savedRecipes: users.savedRecipes });
    res.json("");
  } catch (err) {
    res.json(err);
  }
});

router.get("/savedRecipes/ids", async (req, res) => {
  try {
    const users = await user.findById(req.body.userID);
    res.json({ savedRecipes: users?.savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

router.get("/savedRecipes", async (req, res) => {
  try {
    const users = await user.findById(req.body.userID);
    const savedRecipes = await recipes.find({
      _id: { $in: users.savedRecipes },
    });
    res.json({ savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
