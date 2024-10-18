import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
      <Link
        href="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        Go Home
      </Link>

      {recipeList && recipeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-600">No recipes available.</p>
      )}
    </div>
  );
}

const RecipeCard = ({ recipe }) => {
  const { id, image, name, rating, cuisine } = recipe;

  return (
    <Link href={`/recipe-list/${id}`}>
      <Card>
        <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform">
          <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <p className="text-lg text-gray-600">Rating: {rating}</p>
              <p className="ml-auto text-lg text-gray-600 font-bold">
                {cuisine}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
