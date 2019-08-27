const express = require('express');
const Contact = require('./contacts-model');
const router = express.Router();

const restricted = require('../auth/auth-middleware');

router.get('/:user_id', restricted, (req, res) => {
    const { user_id } = req.params;
    Contact.getUserContacts(user_id)
        .then((contact) => {
            res.status(200).json(contact);
        }).catch((err) => {
            res.status(500).json({message:'Error getting contacts'})
        });
});


router.post('/', restricted,(req, res) => {
    const contactData = req.body;
    const userId = req.user.subject
    contactData.user_id = userId;
    Contact.postContact(contactData)
        .then((contact) => {
            res.status(200).json(contact)
        }).catch((err) => {
            res.status(500).json({message:'Error adding Contact'})
        });
});

router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    Contact.updateContact(id, changes)
        .then((contact) => {
            res.status(200).json({message: `Contact ${id} updated!`})
        }).catch((err) => {
            res.status(500).json({message:'Error Updating Contact'})
        });
});

router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id;
    Contact.removeContact(id)
    .then(contact => {
        res.status(204).json({message:`Contact ${id} Deleted!`})
    }).catch((err) => {
        res.status(500).json({message:'Error Deleting Contact'})
    });
});


module.exports = router;