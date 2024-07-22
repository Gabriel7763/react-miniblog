import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLaT58Tvp48HBxwE1A5ue1fmCY5x4ueyw",
  authDomain: "miniblog-e46c1.firebaseapp.com",
  projectId: "miniblog-e46c1",
  storageBucket: "miniblog-e46c1.appspot.com",
  messagingSenderId: "120111982114",
  appId: "1:120111982114:web:9ae7d98527c96a26bf4c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }