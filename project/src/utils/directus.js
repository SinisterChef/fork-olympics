import { createDirectus, rest, readItems, createItem } from '@directus/sdk';

// Initialize the Directus client with REST transport
export const directus = createDirectus(import.meta.env.VITE_DIRECTUS_URL).with(rest());

console.log("Initialized Directus client:", directus);

// Fetch all recipes from the 'recipes' collection
export async function fetchRecipes() {
  try {
    const response = await directus.request(readItems('recipes'));
    console.log("Fetched raw API response:", response);

    // Return the response directly (it's already an array)
    return response || []; // Safeguard to return an empty array if null/undefined
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

// Create a new recipe in the 'recipes' collection
export async function createRecipe(recipeData) {
  try {
    const response = await directus.request(createItem('recipes', recipeData));
    console.log("Created recipe:", response);
    return response;
  } catch (error) {
    console.error("Error creating recipe:", error);
    throw error;
  }
}

// Example utility function to fetch a single recipe by ID
export async function fetchRecipeById(id) {
  try {
    const { data } = await directus.request(readItems('recipes', { filter: { id: { _eq: id } } }));
    console.log(`Fetched recipe with ID ${id}:`, data);
    return data || null;
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error);
    return null;
  }
}

// Example utility function to update a recipe
export async function updateRecipe(id, updatedData) {
  try {
    const response = await directus.request(createItem('recipes', updatedData, { method: 'PATCH', id }));
    console.log(`Updated recipe with ID ${id}:`, response);
    return response;
  } catch (error) {
    console.error(`Error updating recipe with ID ${id}:`, error);
    throw error;
  }
}

// Example utility function to delete a recipe
export async function deleteRecipe(id) {
  try {
    await directus.request({ url: `/items/recipes/${id}`, method: 'DELETE' });
    console.log(`Deleted recipe with ID ${id}`);
  } catch (error) {
    console.error(`Error deleting recipe with ID ${id}:`, error);
    throw error;
  }
}


