import { useEffect, useState } from "react";
import { fetchRecipes } from './utils/recipeService';
import RecipePreview from './components/recipePreview';
import HomepageFeature from './components/homepageFeature';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [homepageFeature, setHomepageFeature] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setLoading(true);
        const { recipes, homepageFeature } = await fetchRecipes();
        setRecipes(recipes || []);
        setHomepageFeature(homepageFeature);
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
    <div className="w-full p-4">
      <div className="container mx-auto">
        <p><span>Icon</span> <span>Nav</span></p>
        <p>Hero Recipe</p>
        <h1>Welcome to Fork Olympics</h1>
        {homepageFeature && (
          <HomepageFeature
            title={homepageFeature.Title}
            image={`http://localhost:8055/assets/${homepageFeature.Hero_image}`}
            url={`http://localhost:8055/items/recipes/${homepageFeature.id}`}
            summary={homepageFeature.Body}
          />
        )}
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
    </div>
  </>
  );
}

export default App;
