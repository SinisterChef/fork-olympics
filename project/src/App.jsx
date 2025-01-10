import { useEffect, useState } from "react";
import { fetchRecipes, updateRecipe } from './utils/recipeService';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setLoading(true);
        const data = await fetchRecipes();
        setRecipes(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="text-3xl font-bold text-blue-500">
        Hello Tailwind!
      </div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>Title:</strong> {recipe?.Title} <br />
            <strong>Body:</strong> {recipe?.Body} <br />
            <strong>Hero Image:</strong> <img src={`http://localhost:8055/assets/${recipe?.Hero_image}`} alt="Hero Image" />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
