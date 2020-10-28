import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCXEtcfdcyxKesEhDmPg1jJ59tWlJ3VBcU",
    authDomain: "crown-db-94030.firebaseapp.com",
    databaseURL: "https://crown-db-94030.firebaseio.com",
    projectId: "crown-db-94030",
    storageBucket: "crown-db-94030.appspot.com",
    messagingSenderId: "57191643336",
    appId: "1:57191643336:web:f52b6dbfc9b73b7804cdfd",
    measurementId: "G-62XQC0RKVY"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase