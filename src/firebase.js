// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU7Auh13lM7nNPo1f3l_xG0Fk_GIjPWI4",
  authDomain: "icarepro-online-appointment.firebaseapp.com",
  projectId: "icarepro-online-appointment",
  storageBucket: "icarepro-online-appointment.appspot.com",
  messagingSenderId: "941650142934",
  appId: "1:941650142934:web:49c15b9d155e4940214b77",
};

// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore();

export default db;
