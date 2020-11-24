import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: _app.env.SVELTE_APP_APIKEY,
  authDomain: _app.env.SVELTE_APP_AUTHDOMAIN,
  databaseURL: _app.env.SVELTE_APP_DB,
  projectId: _app.env.SVELTE_APP_PID,
  storageBucket: _app.env.SVELTE_APP_SB,
  messagingSenderId: _app.env.SVELTE_APP_SID,
  appId: _app.env.SVELTE_APP_APPID,
  measurementId: _app.env.SVELTE_APP_MID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
