
const config = require('../knexfile')
console.log('knex config', config)
module.exports = require('knex')(config);