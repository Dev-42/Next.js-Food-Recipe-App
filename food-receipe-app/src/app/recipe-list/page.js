import RecipeList from "@/components/recipe-list";

const fetchRecipies = async () => {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const result = await apiResponse.json();
    return result?.recipes;
  } catch (e) {
    console.log(e);
  }
};

export default async function Recipes() {
  const recipeList = await fetchRecipies();
  return <RecipeList recipeList={recipeList} />;
}
