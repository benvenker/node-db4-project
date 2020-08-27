exports.up = async function (knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('id');
      tbl.text('name', 128).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments('id');
      tbl.text('name', 128).notNullable();
      tbl.float('quantity').notNullable();
    })
    .createTable('instructions', tbl => {
      tbl.increments('id');
      tbl
        .int('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.text('step_name', 128).notNullable();
      tbl.int('step_number').notNullable();
    })
    .createTable('recipes_ingredients', tbl => {
      tbl
        .int('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .int('ingredient_id')
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('recipes_instructions', tbl => {
      tbl
        .int('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .int('instruction_id')
        .notNullable()
        .references('id')
        .inTable('instructions')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = async function (knex) {};
