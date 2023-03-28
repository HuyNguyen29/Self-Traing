import { END_POINTS } from '../const/api';
import APIUtils from '../utils/apiUtils';
import ApiUtils from '../utils/apiUtils';

const loginApi = async payload => {
  return await ApiUtils.post(END_POINTS.LOGIN_URL, {
    body: payload
  });
};

const signUpAPI = async payload => {
  return await APIUtils.post(END_POINTS.SING_UP, { body: payload });
};

const AuthServices = {
  loginApi,
  signUpAPI
};

export default AuthServices;
