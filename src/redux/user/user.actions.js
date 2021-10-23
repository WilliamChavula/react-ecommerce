import {
  EMAIL_SIGN_IN_START,
  SIGN_IN_FAILURE,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  CHECK_USER_SESSION, SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE
} from '../actionTypes'

export const googleSIgnInStart = () => ({
  type: GOOGLE_SIGN_IN_START
})

export const emailSIgnInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

export const SignInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
})

export const SignInFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
})

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type: SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
  type: SIGN_OUT_FAILURE,
  payload: error
})