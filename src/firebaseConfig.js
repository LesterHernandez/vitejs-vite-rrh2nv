// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXqD7E7IaxRYMXHTHrKrolTvfiSj_1dng',
  authDomain: 'ecommerce-f4046.firebaseapp.com',
  projectId: 'ecommerce-f4046',
  storageBucket: 'ecommerce-f4046.appspot.com',
  messagingSenderId: '545765237465',
  appId: '1:545765237465:web:aae8b4da5605a773b814c8',
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
