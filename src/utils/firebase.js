import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.SVELTE_APP_APIKEY,
  authDomain: process.env.SVELTE_APP_AUTHDOMAIN,
  databaseURL: process.env.SVELTE_APP_DB,
  projectId: process.env.SVELTE_APP_PID,
  storageBucket: process.env.SVELTE_APP_SB,
  messagingSenderId: process.env.SVELTE_APP_SID,
  appId: process.env.SVELTE_APP_APPID,
  measurementId: process.env.SVELTE_APP_MID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
