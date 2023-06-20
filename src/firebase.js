import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdcXp-j1go9rBZFeUrjiz78qfwYYyt5-I",
  authDomain: "whatsapp-mern-c0abd.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-c0abd-default-rtdb.firebaseio.com",
  projectId: "whatsapp-mern-c0abd",
  storageBucket: "whatsapp-mern-c0abd.appspot.com",
  messagingSenderId: "234850307718",
  appId: "1:234850307718:web:3adb956385e87307960b07",
};

//to use firebase services in application
const app = initializeApp(firebaseConfig);

//to provide authentication
const auth = getAuth();

//let your users authenticate with Firebase using their Google Accounts
const provider = new GoogleAuthProvider();

export { auth, provider, app };