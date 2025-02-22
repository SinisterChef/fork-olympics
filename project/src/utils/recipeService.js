import { readItems, createItem, updateItem, readItem, deleteItem } from '@directus/sdk';
import { directus } from './directus';

// Fetch all recipes from the 'recipes' collection
export async function fetchRecipes() {
  try {
    const response = await directus.request(readItems('recipes'));
    console.log("Fetched raw API response:", response);

    // Separate the homepage featured recipe
    const homepageFeature = response.find(recipe => recipe.Homepage_feature);
    const recipes = response.filter(recipe => !recipe.Homepage_feature);

    return { recipes, homepageFeature };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return { recipes: [], homepageFeature: null };
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

// Fetch a single recipe by ID
export async function fetchRecipeById(id) {
  try {
    const { data } = await directus.request(readItem('recipes', id));
    console.log(`Fetched recipe with ID ${id}:`, data);
    return data || null;
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error);
    return null;
  }
}

// Update a recipe
export async function updateRecipe(id, updatedData) {
  try {
    const response = await directus.request(updateItem('recipes', id, updatedData));
    console.log(`Updated recipe with ID ${id}:`, response);
    return response;
  } catch (error) {
    console.error(`Error updating recipe with ID ${id}:`, error);
    throw error;
  }
}

// Delete a recipe
export async function deleteRecipe(id) {
  try {
    await directus.request(deleteItem('recipes', id));
    console.log(`Deleted recipe with ID ${id}`);
  } catch (error) {
    console.error(`Error deleting recipe with ID ${id}:`, error);
    throw error;
  }
} 