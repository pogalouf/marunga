import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7WuyMEf2L-tg_Uq8nJxDF3JPniR3b060",
    authDomain: "i-fitin-whatsapp.firebaseapp.com",
    projectId: "i-fitin-whatsapp",
    storageBucket: "i-fitin-whatsapp.appspot.com",
    messagingSenderId: "644673933692",
    appId: "1:644673933692:web:fb90b070e6e0500abf94f9",
    measurementId: "G-RXHQ50ZJG3",
  };


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;