import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBOL54kJ3EDCKe2YEU-hZXXHeiQmt2sLjQ",
    authDomain: "unityassets-3eb90.firebaseapp.com",
    databaseURL: "https://unityassets-3eb90-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "unityassets-3eb90",
    storageBucket: "unityassets-3eb90.appspot.com",
    messagingSenderId: "377022163692",
    appId: "1:377022163692:web:4068fef4a225902a4c53c9"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;