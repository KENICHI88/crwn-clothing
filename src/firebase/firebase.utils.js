import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAvgZf7mOCx3vfCKUSfktaw8ZZlyiRzgPo",
  authDomain: "crwn-db-7d9a0.firebaseapp.com",
  projectId: "crwn-db-7d9a0",
  storageBucket: "crwn-db-7d9a0.appspot.com",
  messagingSenderId: "649948418776",
  appId: "1:649948418776:web:9f77e7669dfe426acf7dad",
  measurementId: "G-L10KWFMJFR"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error creating user', error.message);
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_acount'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
