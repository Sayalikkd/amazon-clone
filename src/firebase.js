import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6L41MymSNKhYl6t6c6E6MQvBzU-W89pk",
  authDomain: "clone-4b330.firebaseapp.com",
  projectId: "clone-4b330",
  storageBucket: "clone-4b330.appspot.com",
  messagingSenderId: "276012043167",
  appId: "1:276012043167:web:f35366e210b55bd98dcbaa",
  measurementId: "G-F963T8WBN6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };