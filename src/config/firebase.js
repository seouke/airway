import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyClN6M0XgMqwCNcJ3vJWm9VAJn63sYZaU8",
    authDomain: "airway-6bf26.firebaseapp.com",
    projectId: "airway-6bf26",
    storageBucket: "airway-6bf26.appspot.com",
    messagingSenderId: "100516249495",
    appId: "1:100516249495:web:a07a6af6f936cc55bd8ed2"
  };

  export const firebaseApp = initializeApp(firebaseConfig)

  export const db = getFirestore()