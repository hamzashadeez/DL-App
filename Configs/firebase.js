import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDh_lsBgFVfwfmVIal5KGQlsSzVy64VewA",
    authDomain: "dlabari.firebaseapp.com",
    projectId: "dlabari",
    storageBucket: "dlabari.appspot.com",
    messagingSenderId: "231215023747",
    appId: "1:231215023747:web:79bb74c135f161cfed3db6",
    measurementId: "G-16TQ9G6Y6F"
  });

  const storage = firebaseApp.storage();
  const auth = firebaseApp.auth();
  const db = firebaseApp.firestore();

  export {db, storage, auth}; 
