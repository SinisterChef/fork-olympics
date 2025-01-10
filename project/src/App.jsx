import { useEffect, useState } from "react";
import { fetchRecipes } from './utils/recipeService';
import RecipePreview from './components/recipePreview';

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
    <h1>Welcome to Fork Olympics</h1>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="p-4">
            <RecipePreview
              url={`http://localhost:8055/items/recipes/${recipe?.id}`}
              title={recipe?.Title}
              summary={recipe?.Body}
              image={`http://localhost:8055/assets/${recipe?.Hero_image}`}
            />
          </div>
        ))}
      </div>
    </div>
  </>
  );
}

export default App;
