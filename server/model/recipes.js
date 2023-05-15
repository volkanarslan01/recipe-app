const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  imageURL: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user_db",
  },
});

module.exports = mongoose.model("recipes", recipeSchema);
