import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6N8l0DRDO8VDouV6SOy4_v6NWB3jgibQ",
    authDomain: "slack-clone-53110.firebaseapp.com",
    projectId: "slack-clone-53110",
    storageBucket: "slack-clone-53110.appspot.com",
    messagingSenderId: "370673042303",
    appId: "1:370673042303:web:5347ff63281ae9fadad04a",
    measurementId: "G-NL60LJ05EH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;