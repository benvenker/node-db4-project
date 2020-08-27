exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'pound(s) of chicken', quantity: 2.0 },
        { id: 2, name: 'oz(s) of breadcrumbs', quantity: 3.5 },
        { id: 3, name: 'tbsp(s) of olive oil', quantity: 2.0 },
        { id: 4, name: 'stick(s) of butter', quantity: 1 },
        { id: 5, name: 'cup(s) of oil', quantity: 4.5 },
        { id: 6, name: 'tbsp(s) of salt', quantity: 1.0 },
        { id: 7, name: 'tbsp(s) of pepper', quantity: 2.0 },
      ]);
    });
};
