const db = require('./db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

async function getRecipes() {
  return db('recipes');
}

async function getShoppingList(recipeId) {
  return db
    .select('ingredients.name', 'ingredients.quantity')
    .from('recipes_ingredients as ri')
    .join('ingredients', 'ingredients.id', 'ri.ingredient_id')
    .where('ri.recipe_id', '=', recipeId);
}

async function getInstructions(recipeId) {
  return db
    .select('instructions.step_number', 'instructions.step_name')
    .from('recipes_instructions as ri')
    .join('instructions', 'instructions.id', 'ri.instruction_id')
    .where('ri.recipe_id', '=', recipeId)
    .orderBy('instructions.step_number', 'asc');
}
