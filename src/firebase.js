// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWIb0OdoEGqCl9txNKe1AjEJTwZojRo0A",
  authDomain: "netflix-practice-ed3a7.firebaseapp.com",
  projectId: "netflix-practice-ed3a7",
  storageBucket: "netflix-practice-ed3a7.appspot.com",
  messagingSenderId: "838037421708",
  appId: "1:838037421708:web:b1901e57c2e747a72b45a9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
