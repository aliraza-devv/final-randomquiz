import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDTGYJloEv76goYdWzqnDK02e96ottNsIA",
  authDomain: "final-randomquiz.firebaseapp.com",
  projectId: "final-randomquiz",
  storageBucket: "final-randomquiz.appspot.com",
  messagingSenderId: "577329996425",
  appId: "1:577329996425:web:2881de00a10034913bdc58",
  measurementId: "G-VN1ENKZ6BC"
};

const app = initializeApp(firebaseConfig);
const authe = getAuth();
const db = getFirestore(app);

export {app, authe, db}