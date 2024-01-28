// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVkhFuhQPpAbzzkBj9xv2l8R0AlxmpQcQ",
  authDomain: "tamuhack-aa.firebaseapp.com",
  databaseURL: "https://tamuhack-aa-default-rtdb.firebaseio.com",
  projectId: "tamuhack-aa",
  storageBucket: "tamuhack-aa.appspot.com",
  messagingSenderId: "598832260977",
  appId: "1:598832260977:web:a396519ffb929e08f338d0",
  measurementId: "G-BRJTMQKXHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { db };