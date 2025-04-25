// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC77RxCL0KR0gQZ0yVTnbZHlN95eMkRF_M",
  authDomain: "dientoandammay-5d5af.firebaseapp.com",
  projectId: "dientoandammay-5d5af",
  storageBucket: "dientoandammay-5d5af.firebasestorage.app",
  messagingSenderId: "136638452898",
  appId: "1:136638452898:web:2cea09c442c96170ccf3fb",
  measurementId: "G-QP52Z25GWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);