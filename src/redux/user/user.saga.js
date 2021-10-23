import { takeLatest, put, all, call } from "redux-saga/effects";
import { getDoc} from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

import {
    createUserProfileDocument,
    signInWithGoogle,
    provider,
    auth,
    getCurrentUser
} from "../../firebase/firebase.utils";
import {CHECK_USER_SESSION, EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START, SIGN_OUT_START} from "../actionTypes";
import {SignInSuccess, SignInFailure, signOutSuccess, signOutFailure} from "./user.actions";

function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnap = yield getDoc(userRef)
        yield put(SignInSuccess({ id: userSnap.id, ...userSnap.data() }))
    } catch (error) {
        yield put(SignInFailure(error.message))
    }
}

function* startSignInWithGoogle() {
    try {
        const { user } = yield signInWithGoogle(auth, provider)
        yield getSnapshotFromUserAuth(user)
    }catch (error) {
        yield put(SignInFailure(error.message))
    }
}

function* startSignInWithEmail({ payload: { email, password }}) {
    try {
        const { user } = yield signInWithEmailAndPassword(auth, email, password)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(SignInFailure(error.message))
    }
}

function* isUserAuthenticated() {
    try{
        const userAuth  = yield getCurrentUser()
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    }catch (error) {
        yield put(SignInFailure(error.message))
    }
}

function* userSignOut() {
    try{
        yield signOut(auth)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error.message))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, startSignInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, startSignInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(SIGN_OUT_START, userSignOut)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ])
}
