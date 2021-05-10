import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAMDOrrZOHXg7XhljKAjhh-KlPmbo3ttus",
    authDomain: "twitter-chakmasi.firebaseapp.com",
    // databaseUrl: "", //bu nasıl olacak???
    projectId: "twitter-chakmasi",
    storageBucket: "twitter-chakmasi.appspot.com",
    messagingSenderId: "114450643826",
    appId: "1:114450643826:web:f9c1e89c6cf933e836fbeb",
    measurementId: "G-DB1FPYDJEW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db