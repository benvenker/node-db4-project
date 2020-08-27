exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { id: 1, step_name: 'clean chicken', recipe_id: 2, step_number: 1 },
        { id: 2, step_name: 'bread chicken', recipe_id: 2, step_number: 2 },
        { id: 3, step_name: 'fry chicken', recipe_id: 2, step_number: 3 },
      ]);
    });
};
