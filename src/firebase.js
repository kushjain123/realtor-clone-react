// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJhd6HyF7vDSJEPu1qRIK34Prk0VanvK4",
  authDomain: "realtor-clone-react-3a083.firebaseapp.com",
  projectId: "realtor-clone-react-3a083",
  storageBucket: "realtor-clone-react-3a083.appspot.com",
  messagingSenderId: "345173357094",
  appId: "1:345173357094:web:3f45ab16ccf3c3dd832ce7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()