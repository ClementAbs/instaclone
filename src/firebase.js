// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApM7Pc11wjRT4y2X2p_UUBJgO94_c5NiM",
  authDomain: "instagram-clone-react-57994.firebaseapp.com",
  projectId: "instagram-clone-react-57994",
  storageBucket: "instagram-clone-react-57994.appspot.com",
  messagingSenderId: "1014862938139",
  appId: "1:1014862938139:web:fa5735d79d92980e1f78be",
  measurementId: "G-6GYH183LJM"
};


// Initialize Firebase
const app  = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

// const db = getFirestore();
export {db};