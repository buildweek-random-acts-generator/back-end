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


router.get('/rando', (req, res) => {});


router.get('/random', restricted, (req, res) => {
    const userId = req.user.subject
    Ark.getArks()    
    .then((arks) => {
        const random = arks[Math.floor(Math.random()*arks.length)];
        res.status(200).json(random)
    }).catch((err) => {
        res.status(500).json({message:'Arks not found'})
    });
});


router.post('/', restricted, (req, res) => {
    console.log(req.body);
    const arkData = req.body;
    const userId = req.user.subject
    arkData.user_id = userId;
    Ark.postArk(arkData)
    .then(arks => {
        res.status(200).json(arks)
    }).catch((err) => {
        res.status(500).json({message:'Error adding Arks'})
    });
});


router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    console.log(changes)
    Ark.updateArk(id, changes)
    .then(ark => {
        res.status(200).json({message: `Ark ${id} updated!`})
    }).catch((err) => {
        res.status(500).json({message:'Error Updating Ark'})
    });
});


router.delete('/:id', restricted,(req, res) => {
    const id = req.params.id;
    Ark.removeArk(id)
        .then(ark => {
            res.status(204).json({message:`Ark ${id} Deleted!`})
        }).catch((err) => {
            res.status(500).json({message:'Error Deleting Ark'})
        });
});

module.exports = router;