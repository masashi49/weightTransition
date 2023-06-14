// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAkUd9ddo75FIKFPFh2TqJMM9fOjcqoEsU',
  authDomain: 'weighttransition-774e3.firebaseapp.com',
  projectId: 'weighttransition-774e3',
  storageBucket: 'weighttransition-774e3.appspot.com',
  messagingSenderId: '811944389023',
  appId: '1:811944389023:web:a777fbd8d31302f32a75aa',
  measurementId: 'G-XGYY62249D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
