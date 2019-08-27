
exports.up = function(knex) {
    return knex.schema
        .createTable('arks', ark => {
            ark.increments();
            ark
                .string('ark', 1000)
                .notNullable()
                .unique();
            ark
                .integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })      
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('arks')
};
