import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCMSAp4W-dZdYHg2pZ6zyocd2miJMV6TbY",
  authDomain: "health-tracker-148bc.firebaseapp.com",
  databaseURL: "https://health-tracker-148bc.firebaseio.com",
  projectId: "health-tracker-148bc",
  storageBucket: "health-tracker-148bc.appspot.com",
  messagingSenderId: "343134936153",
  appId: "1:343134936153:web:5a09db35afad714262e548"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
