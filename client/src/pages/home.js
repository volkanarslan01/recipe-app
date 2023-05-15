import { useEffect, useState } from "react";
import axios from "../Api/axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("/recipes");
        setRecipes(response.data);
        console.log(response.data);
      } catch (err) {}
    };
    fetchRecipe();
  }, []);
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageURL} alt={recipe.name} />
            <p>Cooking Time? {recipe.cookingTime} (minutes)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
