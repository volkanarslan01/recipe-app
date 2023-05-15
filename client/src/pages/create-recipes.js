import { useState } from "react";
import axios from "../Api/axios.js";
import { userGETuserID } from "../hooks/userGetUserID.js";
import { useNavigate } from "react-router-dom";
const CreateRecipe = () => {
  const userID = userGETuserID();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageURL: "",
    cookingTime: 0,
    userOwner: userID,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
    console.log(recipe);
  };

  const handleIngredientChange = (event, idx) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipe({ ...recipe, ingredients });
    console.log(recipe);
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
    console.log(recipe);
  };

  const onSumbit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/recipes", recipe);
      alert("Recipe Create");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={onSumbit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, idx) => (
          <input
            type="text"
            id={idx}
            name="ingredient"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, idx)}
          />
        ))}
        <button onClick={addIngredient} type="button">
          Add Ingredient
        </button>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          onChange={handleChange}
        ></textarea>
        <label htmlFor="imageURL">Image URL</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          onChange={handleChange}
        />
        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
