// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0DnloGLgz9CTUbMSsyt5sMQ5u9n737_w",
  authDomain: "cinephile-b21ef.firebaseapp.com",
  projectId: "cinephile-b21ef",
  storageBucket: "cinephile-b21ef.appspot.com",
  messagingSenderId: "194190448437",
  appId: "1:194190448437:web:592fd5d88d478870f25e7c",
  measurementId: "G-22QY9HX9HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);