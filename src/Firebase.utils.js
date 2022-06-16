// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9eGt_iSzWCcQw6xlOkqD2XqB6SmS2KSk",
    authDomain: "blog-bcdc8.firebaseapp.com",
    projectId: "blog-bcdc8",
    storageBucket: "blog-bcdc8.appspot.com",
    messagingSenderId: "427633939877",
    appId: "1:427633939877:web:1f718a9c22318635b8444c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const fireStore = getFirestore(app);
export const collectionRef = collection(fireStore, 'post');
