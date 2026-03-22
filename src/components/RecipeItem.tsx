import type { Recipe } from "../types/Recipe";

type RecipeItemProps = {
  recipe: Recipe;
};

function RecipeItem({ recipe }: RecipeItemProps) {
  return (
    <li style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc" }}>
      <h3>{recipe.name}</h3>

      <p>
        <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
      </p>

      <p>
        <strong>Instructions:</strong> {recipe.instructions}
      </p>
    </li>
  );
}

export default RecipeItem;