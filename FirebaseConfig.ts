import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAimI3DmjabIZUrT7Jw04napY633bxzl3g",
  authDomain: "proxy-attendance.firebaseapp.com",
  projectId: "proxy-attendance",
  storageBucket: "proxy-attendance.appspot.com",
  messagingSenderId: "972395946518",
  appId: "1:972395946518:web:b55bfc1892b29e3cc8cb37",
  measurementId: "G-27C8J7TJ14"
};

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH= getAuth(FIREBASE_APP)
export const FIRESTORE_DP = getFirestore(FIREBASE_APP)
