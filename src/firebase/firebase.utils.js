import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDu4nnwkO5b6mLSwQ4naMvNhu4xH7zEk0U",
    authDomain: "crwn-db-65985.firebaseapp.com",
    databaseURL: "https://crwn-db-65985.firebaseio.com",
    projectId: "crwn-db-65985",
    storageBucket: "crwn-db-65985.appspot.com",
    messagingSenderId: "309288391289",
    appId: "1:309288391289:web:b39817c17a75b16e96faa8",
    measurementId: "G-TM788SHFS3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;