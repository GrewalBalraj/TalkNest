import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "chat-cea1f.firebaseapp.com",
  projectId: "chat-cea1f",
  storageBucket: "chat-cea1f.appspot.com",
  messagingSenderId: "731563471201",
  appId: "1:731563471201:web:a54f3c0a05683793645520",
  measurementId: "G-ZXTCMP4HD0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
