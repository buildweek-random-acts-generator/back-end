const db = require('../database/dbConfig');

module.exports = {
    getUserContacts,
    postContact,
    updateContact,
    removeContact
}



function getUserContacts(user_id)  {
    return db('arks')
     .innerJoin('users', 'ark.user_id', '=', 'users.id')
     .where({ user_id })
}
function postArk(ark) {
    return db('arks').insert(ark);
}
function updateArk(id, changes) {
    return db('arks')
        .where({ id })
        .update(changes);
}
function removeArk(id) {
    return db('arks')
        .where('id', id)
        .del();
}