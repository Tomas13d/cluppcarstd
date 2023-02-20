import firebase from "firebase-admin"
import functions from "firebase-functions"
import  { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

import serviceAccountKey from "./serviceAccountKey.json" assert { type: "json" };

const app = initializeApp({
  credential: cert(serviceAccountKey),
  databaseURL: 'https://cluppcarstd-9fc72-default-rtdb.firebaseio.com'
});


export const db = firebase.firestore();
export const auth = getAuth(app);

export const updateTrigger = functions.firestore
  .document('vehicles')
  .onUpdate((change, context) => { 
    const before = change.before.data()
    const after = change.after.data()
    if(before.deleted === after.deleted){
      return null
    }
    const timestampDeleted = (new Date()).getTime() 
    return change.after.ref.update({timestampDeleted: timestampDeleted})
   });
