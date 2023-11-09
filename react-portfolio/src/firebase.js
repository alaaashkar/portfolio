// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDAqRFL0cfmBTK1nlT4ByxhsKQedalF2Dg",
  authDomain: "react-portfolio-dashboar-56fec.firebaseapp.com",
  projectId: "react-portfolio-dashboar-56fec",
  storageBucket: "react-portfolio-dashboar-56fec.appspot.com",
  messagingSenderId: "518489760430",
  appId: "1:518489760430:web:da983390ed1168dec9c33f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const storage = getStorage(app)
export const db = getFirestore(app)
export const signInWithGoogle = () => signInWithPopup(auth, provider)