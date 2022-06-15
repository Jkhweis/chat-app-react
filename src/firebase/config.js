import firebase from 'firebase/app';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyA8XPZCnBSP0VYXdF9t-oU8mXpRJQXSs6E',
  authDomain: 'chat-app-561bf.firebaseapp.com',
  projectId: 'chat-app-561bf',
  storageBucket: 'chat-app-561bf.appspot.com',
  messagingSenderId: '680103937302',
  appId: '1:680103937302:web:a8987709bfc2eca2e8bc37',
  measurementId: 'G-TRFQ3TG03D',
});

//init services
const db = firebaseConfig.firestore();
const auth = firebase.auth();

export { db, auth };
