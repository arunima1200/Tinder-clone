/* eslint-disable no-unused-vars */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlYh6AQ5TyxxtSMAuhGW8qzP0IPRcTcqQ",
    authDomain: "tinder-firebase-clone-26077.firebaseapp.com",
    projectId: "tinder-firebase-clone-26077",
    storageBucket: "tinder-firebase-clone-26077.appspot.com",
    messagingSenderId: "547141293588",
    appId: "1:547141293588:web:c7e0c26d1ff9008e1d3901",
    measurementId: "G-4H81WT77LQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()

  export default db;