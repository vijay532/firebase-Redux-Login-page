import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  //Your config values
  apiKey: "AIzaSyB-MhZdPYNY6wUJQduIxUIwcjY6ZKJSS7w",
	authDomain: "testpage-e4c04.firebaseapp.com",
	projectId: "testpage-e4c04",
	storageBucket: "testpage-e4c04.appspot.com",
	messagingSenderId: "897464993015",
	appId: "1:897464993015:web:2b773f1eea828539dbfff2",
	measurementId: "G-TQDNP67Z5T"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const auth = firebase.auth();  
export const db = baseDb;
