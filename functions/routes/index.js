const express = require('express')
const router = express.Router();
const musicRoute = require('./music')

router.use('/music', musicRoute)

module.exports = router;

