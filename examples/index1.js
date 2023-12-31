var admin = require('firebase-admin');
var serviceAccount = require('./service_key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fir-test-project-75fad-default-rtdb.firebaseio.com'
});

const firestore = admin.firestore();
const fs = require('fs');
const googleIt = require('google-it');

async function start() {
  const results = await googleIt({ query: 'free food in Auburn Washington', limit: 10 });

  firestore
    .collection('Results From Google Search') // Replace with the desired collection name
    .doc('Subset') // Replace with the desired document ID
    .set({ searchResults: results })
    .then(function(docRef) {
      console.log('Search results stored in Firebase');
    })
    .catch(function(error) {
      console.error('Error storing search results in Firebase: ', error);
    });
}

start();