
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {id: 1, first_name: 'Jeffery', last_name: 'Geofrey', email: 'fakeemail@loser.co', user_id: 3},
        {id: 2, first_name: 'Joe', last_name: 'Shmo', phone: '3525551299', user_id: 2},
        {id: 3, first_name: 'Jake', last_name: 'Cake', user_id: 1}
      ]);
    });
};
