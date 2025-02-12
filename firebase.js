// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfAtjwD9EY1gnhIrwSeDFRokDNgLhv1VI",
  authDomain: "nitish-blog.firebaseapp.com",
  projectId: "nitish-blog",
  storageBucket: "nitish-blog.firebasestorage.app",
  messagingSenderId: "1062698249931",
  appId: "1:1062698249931:web:9d8fd3b069beef44a9754e",
  measurementId: "G-CF1RRR1F2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);