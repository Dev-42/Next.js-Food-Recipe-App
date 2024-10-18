import RecipeDetails from "@/components/recipe-details";
async function fetchRecipeDetails(currentId) {
  console.log("currentId is", currentId);
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentId}`
    );
    const result = await apiResponse.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export default async function RecipeDetailsList({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  console.log(params);
  console.log(getRecipeDetails);
  return <RecipeDetails getRecipeDetails={getRecipeDetails} />;
}
