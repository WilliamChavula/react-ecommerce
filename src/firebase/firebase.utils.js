import { initializeApp } from 'firebase/app';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from "firebase/firestore";

import { firebaseConfig } from "./firebase.config";


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get a reference to the database using @function getFirestore
export const db = getFirestore()

// get a reference to the auth object using the @function getAuth
export const auth = getAuth()

// get a google authentication provider for google-sign-in
export const provider = new GoogleAuthProvider()

// configure sign-in with google
provider.setCustomParameters({ prompt: 'select_account'})

// configure sign-in with google to use a popup window
export const signInWithGoogle = () => signInWithPopup(auth, provider)


// Access firestore.
// check if there is a user auth object
// Check if userId already exists in collection users
// if it exists, do nothing else set userId
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    // get a document reference using @function docs
    const userRef = doc(db, "users", userAuth.uid)

    // get a document snapshot using @function getDoc
    const userSnapshot = await getDoc(userRef)

    // check if the snapshot exists
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            // set the document in firebase using @function setDocs
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

    // get a collection reference using the @function collection from firebase
    const collectionRef = collection(db, collectionKey)

    //  execute multiple write operations as a single batch
    const batch = writeBatch(db)

    // execute multiple write operations to firestore using @function set method
    objectsToAdd.forEach(obj => {
        const newDocRef = doc(collectionRef)
        batch.set(newDocRef, obj)
    })

    // A batch of writes completes atomically and can write to multiple documents.
    // execute batch commit
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