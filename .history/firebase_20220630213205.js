// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4tfg1rdvG1NZhFZRjMl5VvN62Qw3fBEY",
  authDomain: "cinemate-89f5f.firebaseapp.com",
  projectId: "cinemate-89f5f",
  storageBucket: "cinemate-89f5f.appspot.com",
  messagingSenderId: "153854867893",
  appId: "1:153854867893:web:16f7fd31e767511620c1fc",
  measurementId: "G-LZ3V9HJLV3"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();
const db = getFirestore(app);
export {db, auth};