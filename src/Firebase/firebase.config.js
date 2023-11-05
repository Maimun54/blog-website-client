// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMQANMa2Pi1T11STZIuQXVobqxGvB30N4",
  authDomain: "child-blog-cfc06.firebaseapp.com",
  projectId: "child-blog-cfc06",
  storageBucket: "child-blog-cfc06.appspot.com",
  messagingSenderId: "501507611922",
  appId: "1:501507611922:web:f833b599a057363f4367cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;