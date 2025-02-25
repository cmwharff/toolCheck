// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBJNd-BG9NMcNalL9jGZQs98b5Df8bePB4",
  authDomain: "tools-15b94.firebaseapp.com",
  projectId: "tools-15b94",
  storageBucket: "tools-15b94.firebasestorage.app",
  messagingSenderId: "995695894631",
  appId: "1:995695894631:web:2824131299ef4e0ffe74c2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Export both the app and database instances for use in other files
export { app, database };