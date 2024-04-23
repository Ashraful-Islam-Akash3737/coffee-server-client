// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc1ptFkucDdcTXJuv-NaItdFUlztXISFU",
  authDomain: "coffee-store-b740d.firebaseapp.com",
  projectId: "coffee-store-b740d",
  storageBucket: "coffee-store-b740d.appspot.com",
  messagingSenderId: "576221247721",
  appId: "1:576221247721:web:2d703f1c2d0865f5be1878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;