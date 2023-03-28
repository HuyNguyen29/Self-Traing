import {exerciseData} from '../../const/common';
import {GET_EXERCISES} from '../constants/excercises.constant';

const initialState = {
  data: exerciseData,
};

export default function exercisesReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_EXERCISES.SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}
