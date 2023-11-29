import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDOW6owuAbKCDWvZKgGAOKQcyIKD4yq9XE",
  authDomain: "library-d43cf.firebaseapp.com",
  projectId: "library-d43cf",
  storageBucket: "library-d43cf.appspot.com",
  messagingSenderId: "1093147709919",
  appId: "1:1093147709919:web:8f7f9a0e1e6238a012746a",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const db = getFirestore(app);
