// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9LpeT1Udwz4yFaNmhKkZb7s03cJh8gM4",
  authDomain: "grand-luminary.firebaseapp.com",
  projectId: "grand-luminary",
  storageBucket: "grand-luminary.appspot.com",
  messagingSenderId: "460722468416",
  appId: "1:460722468416:web:dad2e0ab1be9ed18a711a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;