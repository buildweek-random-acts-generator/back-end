const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const arksRouter = require('../arks/arks-router');



const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/arks', arksRouter);

server.get('/', (req, res) => {
    res.send("It's alive")
});

module.exports = server;