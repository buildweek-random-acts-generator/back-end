const db = require('../database/dbConfig');

module.exports = {
    getUserContacts,
    postContact,
    updateContact,
    removeContact
}



function getUserContacts(user_id)  {
    return db('contacts')
     .innerJoin('users', 'contacts.user_id', '=', 'users.id')
     .where({ user_id })
}
function postContact(contact) {
    return db('contacts').insert(contact);
}
function updateContact(id, changes) {
    return db('contacts')
        .where({ id })
        .update(changes);
}
function removeContact(id) {
    return db('contacts')
        .where('id', id)
        .del();
}