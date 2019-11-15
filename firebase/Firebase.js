import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAH7gsniPeBywH3PRqiUaO0_hN0eEeyXo",
    authDomain: "blogging-website-26b8a.firebaseapp.com",
    databaseURL: "https://blogging-website-26b8a.firebaseio.com",
    projectId: "blogging-website-26b8a",
    storageBucket: "blogging-website-26b8a.appspot.com",
    messagingSenderId: "138956243496",
    appId: "1:138956243496:web:6fd12475ef7380c13bab1d",
    measurementId: "G-GXM2LVF1BM"
  };
  // Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire