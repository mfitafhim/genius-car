// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR-6tN-6mVpxE-DB-rXb1SlyoiCDDPZXs",
    authDomain: "genius-car-ee67a.firebaseapp.com",
    projectId: "genius-car-ee67a",
    storageBucket: "genius-car-ee67a.appspot.com",
    messagingSenderId: "402771572069",
    appId: "1:402771572069:web:fbc3855d4b49618b0a9d8c"

    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;