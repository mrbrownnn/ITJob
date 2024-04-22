// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH5RpFBxXln5hIx3TqtK7jiHpKCOm2mZE",
  authDomain: "it-job-ca2b9.firebaseapp.com",
  databaseURL: "https://it-job-ca2b9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "it-job-ca2b9",
  storageBucket: "it-job-ca2b9.appspot.com",
  messagingSenderId: "973604782301",
  appId: "1:973604782301:web:d806aca852a438ae899b34",
  measurementId: "G-C9TMVPCVDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const realtimeDB = getDatabase();