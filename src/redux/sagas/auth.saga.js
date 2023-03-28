import {put, takeLatest} from 'redux-saga/effects';
import {callApi} from '../../helpers/callApi';
import AuthServices from '../../services/auth';
import APIUtils from '../../utils/apiUtils';
import {
  loginFailure,
  loginSuccess,
  signUpFailure,
  signUpSuccess,
} from '../actions/auth.action';
import {LOGIN, SIGN_UP} from '../constants/auth.constant';

export function* loginSaga(action) {
  const {payload, onSuccess, onError} = action;
  try {
    const res = yield callApi(AuthServices.loginApi, payload);
    // yield APIUtils.setAccessToken(res.data?.data?.accessToken);
    yield put(loginSuccess(res));
    onSuccess?.();
  } catch (error) {
    yield put(loginFailure(error));
    onError?.(error);
  }
}

export function* signUpSaga(action) {
  const {payload, onSuccess, onError} = action;
  try {
    yield callApi(AuthServices.signUpAPI, payload);
    yield put(signUpSuccess());
    onSuccess?.();
  } catch (error) {
    yield put(signUpFailure());
    onError?.(error);
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN.HANDLER, loginSaga);
  yield takeLatest(SIGN_UP.HANDLER, signUpSaga);
}
