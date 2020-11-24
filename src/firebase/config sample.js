  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const appStorage = firebase.storage();
  const appFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { appStorage, appFirestore, timestamp };