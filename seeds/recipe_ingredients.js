exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { recipe_id: 2, ingredient_id: 4 },
        { recipe_id: 2, ingredient_id: 2 },
        { recipe_id: 2, ingredient_id: 1 },
      ]);
    });
};
