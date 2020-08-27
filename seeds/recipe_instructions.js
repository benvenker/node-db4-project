exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes_instructions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_instructions').insert([
        { recipe_id: 2, instruction_id: 1 },
        { recipe_id: 2, instruction_id: 2 },
        { recipe_id: 2, instruction_id: 3 },
      ]);
    });
};
