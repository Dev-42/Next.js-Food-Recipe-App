import Link from "next/link";

export default function RecipeDetails({ getRecipeDetails }) {
  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:max-w-6xl max-w-2xl mx-auto">
      <Link
        href="/recipe-list"
        className="text-blue-500 hover:underline text-sm mb-4 block"
      >
        ← Go to recipe list
      </Link>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {/* Image Section */}
        <div className="relative lg:sticky top-0 flex justify-center items-center">
          <img
            src={getRecipeDetails?.image}
            alt={getRecipeDetails?.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="lg:ml-8">
          {/* Title & Ratings */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              {getRecipeDetails?.name}
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 text-lg">
                {getRecipeDetails?.rating}★
              </span>
              <span className="text-gray-600 text-sm">
                ({getRecipeDetails?.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Quick Info */}
          <div className="mt-3 flex flex-col space-y-1 text-gray-700 text-lg">
            <p>
              <span className="font-semibold">Meal Type:</span>{" "}
              {getRecipeDetails?.mealType.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Cuisine:</span>{" "}
              {getRecipeDetails?.cuisine}
            </p>
            <p>
              <span className="font-semibold">Difficulty:</span>{" "}
              {getRecipeDetails?.difficulty}
            </p>
            <p>
              <span className="font-semibold">Prep Time:</span>{" "}
              {getRecipeDetails?.prepTimeMinutes} mins
            </p>
            <p>
              <span className="font-semibold">Cook Time:</span>{" "}
              {getRecipeDetails?.cookTimeMinutes} mins
            </p>
            <p>
              <span className="font-semibold">Servings:</span>{" "}
              {getRecipeDetails?.servings}
            </p>
            <p>
              <span className="font-semibold">Calories:</span>{" "}
              {getRecipeDetails?.caloriesPerServing} per serving
            </p>
          </div>

          {/* Ingredients */}
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Ingredients
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {getRecipeDetails?.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Instructions
            </h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              {getRecipeDetails?.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Tags */}
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags</h3>
            <div className="flex space-x-2">
              {getRecipeDetails?.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900">Reviews</h3>
        <div className="mt-5 space-y-4">
          {/* Example review - in real use case, you'd map over actual reviews */}
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <p className="text-gray-800">
              "This salad was so fresh and tasty! Loved the combination of
              quinoa and avocado."
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-500">- by User123</span>
              <span className="text-yellow-500 text-sm">4.5★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
