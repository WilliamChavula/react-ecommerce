import { initializeApp } from 'firebase/app';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc  } from "firebase/firestore";

import { firebaseConfig } from "./firebase.config";


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()
export const auth = getAuth()

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => signInWithPopup(auth, provider)


// Access firestore.
// check if there is a user auth object
// Check if userId already exists in collection users
// if it exists, do nothing else set userId
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = doc(db, "users", userAuth.uid)
    const userSnapshot = await getDoc(userRef)

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user ', e.message)
        }
    }

    return userRef
}

export default app