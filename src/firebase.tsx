// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYJY83UE2X_kyWt7qIpDHVxtux1yLcMGE",
  authDomain: "personalwebsite-a669e.firebaseapp.com",
  projectId: "personalwebsite-a669e",
  storageBucket: "personalwebsite-a669e.firebasestorage.app",
  messagingSenderId: "365360442889",
  appId: "1:365360442889:web:20c17a2a5157844aff52d8",
  measurementId: "G-66H91RPVVT"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let analytics: ReturnType<typeof getAnalytics> | undefined = undefined;

if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

export { app, db, analytics };