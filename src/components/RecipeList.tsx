import type { Recipe } from "../types/Recipe";
import RecipeItem from "./RecipeItem";

type RecipeListProps = {
  recipes: Recipe[];
};

function RecipeList({ recipes }: RecipeListProps) {
  if (recipes.length === 0) {
    return <p>No recipes yet.</p>;
  }

  return (
    <ul>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}

export default RecipeList;