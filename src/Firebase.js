import Firebase from 'firebase/app';
// Add the Firebase services that you want to use
import "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8pUsgZk8sqmZG-7LRo8i31IjZDGEcDSg",
    authDomain: "joyflobites.firebaseapp.com",
    databaseURL: "https://joyflobites-default-rtdb.firebaseio.com",
    projectId: "joyflobites",
    storageBucket: "joyflobites.appspot.com",
    messagingSenderId: "30129742568",
    appId: "1:30129742568:web:53a9e39895a67b2c981f5d",
    measurementId: "G-CXJ07GT7TV"
  };
 Firebase.initializeApp(firebaseConfig);
  export default Firebase;