// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsbM60jIw8fgDZRQq-a1v2smPvD-0BKjg",
  authDomain: "ocean3-a9cbd.firebaseapp.com",
  projectId: "ocean3-a9cbd",
  storageBucket: "ocean3-a9cbd.appspot.com",
  messagingSenderId: "318545365177",
  appId: "1:318545365177:web:7afd02675291de0cf67368",
  measurementId: "G-5HLD6NGEL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);