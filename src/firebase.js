// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrauIIhWOWvcVtRg1GH8nxQk0c0_OrJEQ",
  authDomain: "fir-chat-e81d6.firebaseapp.com",
  projectId: "fir-chat-e81d6",
  storageBucket: "fir-chat-e81d6.appspot.com",
  messagingSenderId: "817706415413",
  appId: "1:817706415413:web:362e89321d8f5b939b087c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)