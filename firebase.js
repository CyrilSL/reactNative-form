// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBmN3gBxU1PAK2ilR6QwvNyMO5tua2wkHc",
  authDomain: "x-volt.firebaseapp.com",
  databaseURL: "https://x-volt-default-rtdb.firebaseio.com",
  projectId: "x-volt",
  storageBucket: "x-volt.appspot.com",
  messagingSenderId: "650048215569",
  appId: "1:650048215569:web:17c3d552fbce12eadcafb0",
  measurementId: "G-0NLGLVKCQC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore();


export {app};
