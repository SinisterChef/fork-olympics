import { createDirectus, rest } from '@directus/sdk';

export const directus = createDirectus(import.meta.env.VITE_DIRECTUS_URL)
  .with(rest());

// Example function to fetch recipes
export async function fetchRecipes() {
  try {
    const recipes = await directus.items('recipes').readMany();
    return recipes.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}

// Add a new recipe
export async function createRecipe(recipeData) {
  try {
    const response = await directus.items('recipes').createOne(recipeData);
    return response;
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw error;
  }
}

// Update a recipe
export async function updateRecipe(id, recipeData) {
  try {
    const response = await directus.items('recipes').updateOne(id, recipeData);
    return response;
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw error;
  }
}

// Delete a recipe
export async function deleteRecipe(id) {
  try {
    await directus.items('recipes').deleteOne(id);
    return true;
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
} 