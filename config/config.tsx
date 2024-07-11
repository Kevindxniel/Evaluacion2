import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAyYNP1Pk66h0iyAp5plzFKm7aXu8IJHXs",
  authDomain: "ko-prueba.firebaseapp.com",
  projectId: "ko-prueba",
  storageBucket: "ko-prueba.appspot.com",
  messagingSenderId: "826655357255",
  appId: "1:826655357255:web:3f85b9347c8ab5307d3462"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default db;


