import firebase from "firebase-admin"
import  { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

import serviceAccountKey from "./serviceAccountKey.json" assert { type: "json" };

const app = initializeApp({
  credential: cert(serviceAccountKey),
});

export const db = firebase.firestore();
export const auth = getAuth(app);
