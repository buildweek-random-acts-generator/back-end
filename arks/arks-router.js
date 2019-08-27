const express = require('express');
const Ark = require('./arks-model');
const router = express.Router();

const restricted = require('../auth/auth-middleware');

router.get('/', (req, res) => {
    Ark.getArks()
        .then((arks) => {
            res.status(200).json(arks)            
        }).catch((err) => {
            res.status(500).json({message:'Arks not found'})
        });
});


router.post('/', restricted, (req, res) => {
    console.log(req.body)
    const arkData = req.body;
    Ark.postArk(arkData)
    .then(arks => {
        res.status(200).json(arks)
    }).catch((err) => {
        res.status(500).json({message:'Error adding Arks'})
    });
});


module.exports = router;