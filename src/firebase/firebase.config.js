// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrcA3IbgbYjB7sIJo8uJIfWig_N2G12MU",
  authDomain: "m9-m51-auth-privateroute-recap.firebaseapp.com",
  projectId: "m9-m51-auth-privateroute-recap",
  storageBucket: "m9-m51-auth-privateroute-recap.appspot.com",
  messagingSenderId: "548446968546",
  appId: "1:548446968546:web:f7d483ebe1e5ba59091cbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;