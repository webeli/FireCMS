import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCpdc2xSQo0b8xa3qhMUmM8m5Athgto5Lg",
  authDomain: "firecms-1.firebaseapp.com",
  databaseURL: "https://firecms-1.firebaseio.com",
  projectId: "firecms-1",
  storageBucket: "",
  messagingSenderId: "61611348345"
};
firebase.initializeApp(config);

const db = firebase.database();
const fbAuth = firebase.auth();
const firebaseAuth = firebase.auth;

export { db, fbAuth, firebaseAuth }