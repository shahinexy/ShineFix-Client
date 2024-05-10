
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqYCp0GanghZ9sdLEAea0mdbdNQ_VuEaU",
  authDomain: "shinefix-a-10.firebaseapp.com",
  projectId: "shinefix-a-10",
  storageBucket: "shinefix-a-10.appspot.com",
  messagingSenderId: "359481214365",
  appId: "1:359481214365:web:11e4d66e5f8546a6795b74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;