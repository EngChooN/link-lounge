// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaYVrJybninRMDb7cbO4dt1QgZfWZD4tk",
  authDomain: "link-lounge.firebaseapp.com",
  projectId: "link-lounge",
  storageBucket: "link-lounge.appspot.com",
  messagingSenderId: "551991589532",
  appId: "1:551991589532:web:0430ad70d3f753ea064b59",
  measurementId: "G-Y1TZ9N4CKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, analytics, db}