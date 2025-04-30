// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAK7pCWQrxb38wQzGKWRE5cVK_IeDU2qjQ",
  authDomain: "wewallet-7bdcf.firebaseapp.com",
  projectId: "wewallet-7bdcf",
  storageBucket: "wewallet-7bdcf.firebasestorage.app",
  messagingSenderId: "300100798995",
  appId: "1:300100798995:web:710112dcb8fe1aab210de6",
  measurementId: "G-23MLBQKWDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
