import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  
    apiKey: "AIzaSyBw-23StmTaO0Edgw36nJNM3pVtiHzlyHg",
    authDomain: "mov-database.firebaseapp.com",
    projectId: "mov-database",
    storageBucket: "mov-database.appspot.com",
    messagingSenderId: "205070869220",
    appId: "1:205070869220:web:f309e6df942b488418c2f1"
  };
 
  firebase.initializeApp(config);
  const db =firebase.firestore();

  export default db;