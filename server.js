const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

module.exports = server;

server.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await db.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` });
  }
});

server.get('/api/recipes/:id/shopping-list', async (req, res) => {
  try {
    const list = await db.getShoppingList(req.params.id);
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` });
  }
});

server.get('/api/recipes/:id/instructions', async (req, res) => {
  try {
    const instructions = await db.getInstructions(req.params.id);
    res.status(200).json(instructions);
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` });
  }
});

server.get('/api/ingredients/:id/recipes', async (req, res) => {
  try {
    const recipes = await db.getRecipesForIngredient(req.params.id);
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` });
  }
});
