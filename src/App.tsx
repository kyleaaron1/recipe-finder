import { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import type { Recipe } from "./types/Recipe";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  // 🔍 filter by name OR ingredients
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()) ||
    recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(search.toLowerCase())
    )
  );

  // 🌐 fetch recipes from API
  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=100")
      .then((res) => res.json())
      .then((data) => {
        const transformedData: Recipe[] = data.recipes.map((item: any) => ({
          id: item.id,
          name: item.name,
          ingredients: item.ingredients,
          instructions: item.instructions.join(" "),
        }));

        setRecipes(transformedData);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      />

      <h1>Recipe Finder</h1>
      <p>Browse and search recipes.</p>
      <h2>Recipes</h2>

      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default App;