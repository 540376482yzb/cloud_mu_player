const express = require('express')
const router = express.Router();
path = require('path'),
  os = require('os'),
  fs = require('fs');
const { MusicService } = require('../module/music/music.service')

const multer = require('multer')
const SIZE_LIMIT = 10 * 1024 * 1024 // 10MB

const multipartFormDataParser = multer({
  dest: `${os.tmpdir()}/`,
  // increase size limit if needed
  limits: { fieldSize: SIZE_LIMIT },
  // support firebase cloud functions
  // the multipart form-data request object is pre-processed by the cloud functions
  // currently the `multer` library doesn't natively support this behaviour
  // as such, a custom fork is maintained to enable this by adding `startProcessing`
  // https://github.com/emadalam/multer
  startProcessing(req, busboy) {
    req.rawBody ? busboy.end(req.rawBody) : req.pipe(busboy)
  },
})

router.get('/search', MusicService.searchMusic)

router.post('/upload', multipartFormDataParser.any(), MusicService.addMusic)

module.exports = router;