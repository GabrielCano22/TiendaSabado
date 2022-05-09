// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDioQ760G2ojESoTd9BydpgU-ScBWDrQ5I",
  authDomain: "gabriel-tienda-cesde.firebaseapp.com",
  projectId: "gabriel-tienda-cesde",
  storageBucket: "gabriel-tienda-cesde.appspot.com",
  messagingSenderId: "62020581967",
  appId: "1:62020581967:web:cb026f855e6daa0d1d483a",
  measurementId: "G-QNQS9VDDJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);