
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'testing@test.com', password: '$2a$10$ANYjziwt1Tsq69g2bLQSyeTNuweRCOaksssQ6QIh20csxtfc5oGIi'},
        {id: 2, email: 'testing2@test.com', password: '$2a$10$W0hyc/Zbycb6g0Nemv.Yx.Qo37XFL45sJWdRMCJvhsRRknPhwgs0C'},
        {id: 3, email: 'testing3@test.com', password: '$2a$10$WicbDA5bPESd0Y1pq/QKDeYX1VoZJiPKBOdGV0lOhoyJeOktuh7E2'}
      ]);
    });
};
