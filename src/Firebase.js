import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC0s6mHyULT-TGKdd1TPLIw0pdbjojAL1U",
    authDomain: "linkedin-clone-yt-13f6b.firebaseapp.com",
    databaseURL: "https://linkedin-clone-yt-13f6b-default-rtdb.firebaseio.com",
    projectId: "linkedin-clone-yt-13f6b",
    storageBucket: "linkedin-clone-yt-13f6b.appspot.com",
    messagingSenderId: "256001868200",
    appId: "1:256001868200:web:95f2b6f5ff86e1a7679d9d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };