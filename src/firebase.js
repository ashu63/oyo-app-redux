import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAjWDNs0a2D_u0pD2wkRv1yMFqU0PTpgHE",
    authDomain: "oyoclonereact.firebaseapp.com",
    projectId: "oyoclonereact",
    storageBucket: "oyoclonereact.appspot.com",
    messagingSenderId: "854466157721",
    appId: "1:854466157721:web:b0cdcda72ea37d4da06c08",
    measurementId: "G-WMQVLTH1ZT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;