import { useEffect, useState } from "react";
import { fetchRecipes } from './utils/directus';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };

    getRecipes();
  }, []);

  return (
    <>
      <div className="text-3xl font-bold text-blue-500">
        Hello Tailwind!
      </div>
      <ul> 
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            Title: {recipe.title}, Description: {recipe.description}, 
            Prep Time: {recipe.prep_time}, Cook Time: {recipe.cook_time}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App; 