import {
  EMAIL_SIGN_IN_START,
  SIGN_IN_FAILURE,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS
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