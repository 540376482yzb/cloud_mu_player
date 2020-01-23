const knex = require('../../db/knex');
const admin = require('firebase-admin');
admin.initializeApp();
const bucket = admin.storage().bucket();
const EXPIRED_DATE = '03-09-2491'


class MusicService {

  static async addMusic(req, res, next) {
    return MusicService._uploadToStorage(req.files, bucket)
      .then(concatFiles => knex('music_item').insert(concatFiles))
      .then(() => res.send('add music success'))
      .catch(err => res.send(err))
  }

  static searchMusic(req, res, next) {
    return knex.select().table('music_item').where(true)
      .then((rect) => res.send(rect))
      .catch(res.send)
  }
}

Object.assign(MusicService, {
  _uploadToStorage: (files, bucket) => {
    console.log('file upload to the clould server');
    return Promise.all(files.map(async file => {
      const destination = path.join('music', file.originalname)
      await bucket.upload(file.path, {
        destination,
        metadata: { metadata: { contentType: file.mimeType } }
      })
      console.log('upload completed')
      const [src] = await bucket.file(destination).getSignedUrl({ action: 'read', expires: EXPIRED_DATE })
        .catch(MusicService.andThrow)
      console.log('get signed url', src)
      return {
        title: MusicService.getImageName(file.originalname),
        src
      }
    }))
  },
  andThrow: (error) => {
    console.log(error)
    throw error;
  },
  getImageName: (fullfilename) => fullfilename.split('.')[0]
})

module.exports = { MusicService }