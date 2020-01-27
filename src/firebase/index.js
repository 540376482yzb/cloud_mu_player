// Set the configuration for your app
import * as firebase from 'firebase/app'
import 'firebase/database';
var firebaseConfig = {
  apiKey: "AIzaSyB46aKhLpnrYq7zuBMbsLGEOazPz-ttAmw",
  authDomain: "cloud-mu-player.firebaseapp.com",
  databaseURL: "https://cloud-mu-player.firebaseio.com",
  projectId: "cloud-mu-player",
  storageBucket: "cloud-mu-player.appspot.com",
  messagingSenderId: "932556972062",
  appId: "1:932556972062:web:f51d10e04e7a6966804e0f",
  measurementId: "G-LSXPE07R10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the storage service, which is used to create references in your storage bucket
export { firebase };