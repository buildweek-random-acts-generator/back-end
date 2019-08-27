
exports.up = function(knex) {
  return knex.schema
    .createTable('contacts', tbl => {
        tbl.increments();
        tbl
            .string('name', 255)
            .notNullable();
        tbl
            .string('info', 255);
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('contacts')
};
