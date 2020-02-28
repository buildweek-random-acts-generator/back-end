const knex = require('knex');

const knexConfig = require('../knexfile.js');

const env = process.env.DB_ENV || 'development';

const configOptions = knexConfig[env];


module.exports = knex(configOptions);
