import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiwC8-FhG6tEb4gC-3V8UPt08nG_to6LU",
  authDomain: "olx-react-js-7cf34.firebaseapp.com",
  projectId: "olx-react-js-7cf34",
  storageBucket: "olx-react-js-7cf34.appspot.com",
  messagingSenderId: "990197949283",
  appId: "1:990197949283:web:ba192045ce2d5ec0852956",
  measurementId: "G-EFE3V4C0HK",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
