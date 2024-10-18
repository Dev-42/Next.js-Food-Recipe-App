import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen bg-[url('/path-to-your-background.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to Recipe App</h1>
        <p className="text-lg mb-12">
          Discover delicious recipes from around the world
        </p>
        <Link href="/recipe-list">
          <p className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition">
            Explore Recipes
          </p>
        </Link>
      </div>
    </div>
  );
}
