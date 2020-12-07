import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyBEhfSf8gOyp5HUGU7qWY5j-MWo11EhDjE",
  authDomain: "facebook-messenger-clone-6e0d7.firebaseapp.com",
  projectId: "facebook-messenger-clone-6e0d7",
  storageBucket: "facebook-messenger-clone-6e0d7.appspot.com",
  messagingSenderId: "1078535106986",
  appId: "1:1078535106986:web:8dba5fe184bc743f14fbd3",
  measurementId: "G-3KT5KMW48H"

})

const db = firebaseApp.firestore();

export default db;