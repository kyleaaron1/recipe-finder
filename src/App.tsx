import { useState } from "react";
import RecipeList from "./components/RecipeList";
import type { Recipe } from "./types/Recipe";

function App() {
  const [recipes] = useState<Recipe[]>([
    {
      id: 1,
      name: "Spaghetti",
      ingredients: ["pasta", "tomato sauce"],
      instructions: "Do this, then that, then this, then that, then this.",
    },
    {
      id: 2,
      name: "Tacos",
      ingredients: ["tortilla", "beef"],
      instructions: "Do this, then that, then this, then that, then this.",
    },
  ]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Recipe Finder</h1>
      <p>Browse and search recipes.</p>

      <h2>Recipes</h2>

      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;