  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyAOb3NjsXQY4taWNMmRwLyf2iqFWXKlg7s",
    authDomain: "sayali-thakur.firebaseapp.com",
    databaseURL: "https://sayali-thakur.firebaseio.com",
    projectId: "sayali-thakur",
    storageBucket: "sayali-thakur.appspot.com",
    messagingSenderId: "688489534231",
    appId: "1:688489534231:web:4e3b4cf62caeda5a8edd52",
    measurementId: "G-H1T9VZRF9B"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;
