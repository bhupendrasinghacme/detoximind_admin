import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAwUsMdaJs29QGsU7UYKLyDTGAFkNUIXfE",
    authDomain: "detoximindchatapp-bcd0a.firebaseapp.com",
    projectId: "detoximindchatapp-bcd0a",
    storageBucket: "detoximindchatapp-bcd0a.appspot.com",
    messagingSenderId: "240610875642",
    appId: "1:240610875642:web:44d7a8c74c749452f89143",
    measurementId: "G-HS7ZG1TEFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db };