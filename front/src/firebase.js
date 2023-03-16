// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANIHc_-M7KIEA53NArakODmsHKC6nxWc0",
  authDomain: "react2-b17ac.firebaseapp.com",
  databaseURL: "https://react2-b17ac-default-rtdb.firebaseio.com/",
  projectId: "react2-b17ac",
  storageBucket: "react2-b17ac.appspot.com",
  messagingSenderId: "778938266602",
  appId: "1:778938266602:web:5c84c8e621613f193df893",
  // measurementId: "G-P5P45Z13BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;