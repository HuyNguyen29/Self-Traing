import {LOGIN, LOGOUT} from '../constants/auth.constant';

const initialState = {
  accessToken: '',
  userInfo: {},
};

export default function authReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case LOGIN.SUCCESS:
      return {
        ...state,
        accessToken: payload.data?.data?.accessToken,
        userInfo: {
          username: payload.data?.data?.username,
        },
      };
    case LOGOUT.HANDLER: {
      return {
        ...initialState,
        accessToken: state.accessToken,
      };
    }
    default:
      return state;
  }
}
