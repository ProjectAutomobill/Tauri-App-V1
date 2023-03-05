import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB11aeSCWUxCwpqfQnSQxcESLrTzusvIU0",
  authDomain: "autotekk-db957.firebaseapp.com",
  projectId: "autotekk-db957",
  storageBucket: "autotekk-db957.appspot.com",
  messagingSenderId: "724942562374",
  appId: "1:724942562374:web:8b9c4121bec3da1df15647",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
