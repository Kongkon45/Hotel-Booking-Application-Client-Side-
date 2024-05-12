// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzr3UTpEsCjYbPLCAPgbrRNtO9-jE_6w8",
  authDomain: "rafcart-e-com.firebaseapp.com",
  projectId: "rafcart-e-com",
  storageBucket: "rafcart-e-com.appspot.com",
  messagingSenderId: "489075725644",
  appId: "1:489075725644:web:c6c9219c1582260a95ebe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;