const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./auth-model');
const secrets = require('../config/secrets');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    
    Users.add(user)
    .then((saved) => {
        res.status(201).json(saved);
    }).catch((err) => {
        res.status(500).json(err);
    });
});
router.post('/login', (req, res) => {
    console.log("body",req.body);
    let { email, password } = req.body;

    Users.findBy({ email })
        .first()
        .then(user => {
            console.log("Return", user);
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = getJwt(user);
                console.log("this",token);
                console.log(user.id);
                let id = user.id
                res.status(200).json({message: `Welcome ${user.email}!`, token, id});
            } else {
                res.status(401).json({ message: 'Invalid Credentials'})
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


function getJwt(user) {
    clg("TokenGet", user)
    const payload = {
      subject:user.id,
      email: user.email
    };
    const options = {
      expiresIn: '8h',
    }
    return jwt.sign(payload, secrets.jwtSecret, options);
  }
  
  module.exports = router;