// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqi9fvwTwQG3oAGsnBDyddSYqLATnKxKQ",
  authDomain: "react-20f81.firebaseapp.com",
  databaseURL: "https://react-20f81-default-rtdb.firebaseio.com",
  projectId: "react-20f81",
  storageBucket: "react-20f81.appspot.com",
  messagingSenderId: "526022452806",
  appId: "1:526022452806:web:5af6f1ba4d15e93e8f8c47",
  measurementId: "G-P5P45Z13BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;