const db = require('../database/dbConfig');

module.exports = {
    getArks,
    getUserArks,
    postArk
}

function getArks() {
    return db('arks')
}

function getUserArks(user_id)  {
    return db('arks')
     .innerJoin('users', 'ark.user_id', '=', 'users.id')
     .where({ user_id })
}
function postArk(ark) {
    return db('arks').insert(ark);
}