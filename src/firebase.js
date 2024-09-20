import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "yolo-sitezy.firebaseapp.com",
  projectId: "yolo-sitezy",
  storageBucket: "yolo-sitezy.appspot.com",
  messagingSenderId: "61567655316",
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: "G-S2G94WK0KL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);