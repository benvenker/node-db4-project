exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, name: 'roast chicken' },
        { id: 2, name: 'fried chicken' },
        { id: 3, name: 'grilled chicken' },
      ]);
    });
};
