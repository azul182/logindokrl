// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiE936e-gj-wmf7IQSh0hP-pkFmduea24",
  authDomain: "login-29-08-1b0e3.firebaseapp.com",
  projectId: "login-29-08-1b0e3",
  storageBucket: "login-29-08-1b0e3.appspot.com",
  messagingSenderId: "308600100966",
  appId: "1:308600100966:web:f81e3628b6da8d5cf1b5a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
