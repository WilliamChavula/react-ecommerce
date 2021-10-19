import { initializeApp } from 'firebase/app';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from "firebase/firestore";

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

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)

    const batch = writeBatch(db)

    objectsToAdd.forEach(obj => {
        const newDocRef = doc(collectionRef)
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collection => {
    const transformedCollection = collection.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

   return transformedCollection.reduce((accumulator, collection) => {
       accumulator[collection.title.toLowerCase()] = collection
       return accumulator
   }, {})
}

export default app