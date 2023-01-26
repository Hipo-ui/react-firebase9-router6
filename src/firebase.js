import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7w2HTm_IHA5x84NqzHMeZ7ukXNSoZxRo",
  authDomain: "react-2023-233ad.firebaseapp.com",
  projectId: "react-2023-233ad",
  storageBucket: "react-2023-233ad.appspot.com",
  messagingSenderId: "779953047753",
  appId: "1:779953047753:web:8ef221d84dd2dc9c5c6518",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
