import {GET_EXERCISES_LOG} from '../constants/exercisesLog.constant';

const initialState = {
  data: [],
};

export default function exercisesLogReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_EXERCISES_LOG.SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}
