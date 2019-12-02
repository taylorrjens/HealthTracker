import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAgliNsB1-4m3pSAz5QnjF1QJS73f80Xvk",
  authDomain: "tutoringapp-c127c.firebaseapp.com",
  databaseURL: "https://tutoringapp-c127c.firebaseio.com",
  projectId: "tutoringapp-c127c",
  storageBucket: "tutoringapp-c127c.appspot.com",
  messagingSenderId: "335939285940",
  appId: "1:335939285940:web:6932c4c3da8c418faeb8e1",
  measurementId: "G-1KVWXXS11S"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
