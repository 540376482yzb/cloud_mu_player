const functions = require('firebase-functions');
const app = require('express')();
const bodyParser = require('body-parser')
const cors = require('cors')({ origin: true });
const apiRoute = require('./routes')

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRoute)

exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
