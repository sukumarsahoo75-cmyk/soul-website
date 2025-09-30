// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // We need this for authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1g3qS-1XsiGWVb9-HjTth8gezJSZ3bDw", // I have hidden the end for security
  authDomain: "soul-perfume-website.firebaseapp.com",
  projectId: "soul-perfume-website",
  storageBucket: "soul-perfume-website.appspot.com",
  messagingSenderId: "210343348839",
  appId: "1:210343348839:web:e7a0d8b1042a748d95e2c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// We export this so other parts of our app can use it for logging in, signing up, etc.
export const auth = getAuth(app);