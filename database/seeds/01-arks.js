
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('arks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('arks').insert([
        {id: 1, ark: 'Send an encouraging text'},
        {id: 2, ark: 'Give them their favorite snack'},
        {id: 3, ark: 'Share an image of your favorite memory with them'},
        {id: 4, ark: 'Write a card telling them why you are thankful for them'},
        {id: 5, ark: 'Make them a playlist'}
      ]);
    });
};
