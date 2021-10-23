import { takeLatest, put, all, call } from "redux-saga/effects";
import { getDoc} from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

import { createUserProfileDocument, signInWithGoogle, provider, auth } from "../../firebase/firebase.utils";
import {EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START} from "../actionTypes";
import {SignInSuccess, SignInFailure} from "./user.actions";

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

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, startSignInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, startSignInWithEmail)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}
