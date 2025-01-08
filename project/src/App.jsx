import { useEffect, useState } from "react";
import { supabase } from './utils/supabase';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  async function getRecipes() {
    const { data } = await supabase.from("recipes").select();
    console.log(data);
    setRecipes(data);
  }

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
