import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { withRouter } from 'react-router';

const config = {
    apiKey: "AIzaSyDc68S7vPn4sHAs4CPn12w7QjzW_hf8gNc",
    authDomain: "crwn-db-205af.firebaseapp.com",
    projectId: "crwn-db-205af",
    storageBucket: "crwn-db-205af.appspot.com",
    messagingSenderId: "368269058352",
    appId: "1:368269058352:web:2e5617db628620020a68f5",
    measurementId: "G-PD6Z4PCT68"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //console.log(snapShot);
    //console.log(firestore.doc('users/128fdashadu'))

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication:
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
