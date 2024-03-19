// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTB02YlZuyf5aUvDBAFoUKoG6llta0jL4",
  authDomain: "twitter-app-115c0.firebaseapp.com",
  projectId: "twitter-app-115c0",
  storageBucket: "twitter-app-115c0.appspot.com",
  messagingSenderId: "564311461563",
  appId: "1:564311461563:web:2002948cf9d7bfa339639e",
  measurementId: "G-7MEWLLKHKQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
/* const analytics = getAnalytics(app); */

