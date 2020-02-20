const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.temperature = functions.https.onRequest((request, response) => {
  response.send(random());
});

function random() {
  return Math.ceil(Math.random()*10).toString();
}