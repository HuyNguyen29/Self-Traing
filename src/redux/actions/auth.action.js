import {
  FORGOT_PASSWORD,
  LOGIN,
  LOGOUT,
  SIGN_UP,
} from '../constants/auth.constant';

export const logoutHandle = payload => ({
  type: LOGOUT.HANDLER,
  payload,
});

export const loginHandle = (payload, onSuccess, onError) => ({
  type: LOGIN.HANDLER,
  payload,
  onSuccess,
  onError,
});

export const loginSuccess = payload => ({
  type: LOGIN.SUCCESS,
  payload,
});

export const loginFailure = error => ({
  type: LOGIN.FAILURE,
  error,
});

export const forgotPasswordHandle = (payload, onSuccess, onError) => ({
  type: FORGOT_PASSWORD.HANDLER,
  payload,
  onSuccess,
  onError,
});

export const forgotPasswordSuccess = payload => ({
  type: FORGOT_PASSWORD.SUCCESS,
  payload,
});

export const forgotPasswordFailure = error => ({
  type: FORGOT_PASSWORD.FAILURE,
  error,
});

export const signUpHandle = (payload, onSuccess, onError) => ({
  type: SIGN_UP.HANDLER,
  payload,
  onSuccess,
  onError,
});

export const signUpSuccess = payload => ({
  type: SIGN_UP.SUCCESS,
  payload,
});

export const signUpFailure = error => ({
  type: SIGN_UP.FAILURE,
  error,
});
