import { useEffect, useState } from "react";
import { fetchRecipes } from './utils/directus';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setLoading(true);
        console.log("Fetching recipes...");
        
        // Fetch recipes from Directus
        const data = await fetchRecipes();
        console.log("Raw fetched data:", data);

        // Ensure data is in array format and handle edge cases
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          console.error("Unexpected data format:", data);
          setRecipes([]);
        }
      } catch (err) {
        console.error("Error during fetchRecipes:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log("Rendered recipes:", recipes);

  return (
    <>
      <div className="text-3xl font-bold text-blue-500">
        Hello Tailwind!
      </div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>Title:</strong> {recipe.Title} <br />
            <strong>Body:</strong> {recipe.Body}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
