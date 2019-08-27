
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {id: 1, name: 'Jeffery', info: 'a dingus', user_id: 3},
        {id: 2, name: 'Joe', info: 'a shmo', user_id: 2},
        {id: 3, name: 'Jake', info: 'a cake', user_id: 1}
      ]);
    });
};
