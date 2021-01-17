// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDj8n9UIm3xEKTeRBM6ahxdRpDw_jGYo7I",
  authDomain: "react-2771f.firebaseapp.com",
  projectId: "react-2771f",
  storageBucket: "react-2771f.appspot.com",
  messagingSenderId: "53315443739",
  appId: "1:53315443739:web:94209b8459b39b1212ecbe",
  measurementId: "G-RS9QCPB13Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
