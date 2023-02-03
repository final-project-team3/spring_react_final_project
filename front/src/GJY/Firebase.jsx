import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqi9fvwTwQG3oAGsnBDyddSYqLATnKxKQ",
  authDomain: "react-20f81.firebaseapp.com",
  projectId: "react-20f81",
  storageBucket: "react-20f81.appspot.com",
  messagingSenderId: "526022452806",
  appId: "1:526022452806:web:5af6f1ba4d15e93e8f8c47",
  measurementId: "G-P5P45Z13BF"
};

const firebase = initializeApp(firebaseConfig);

const fireStore = getFirestore(firebase);

export { fireStore };
