import {exercisesItemData} from '../../const/common';
import {GET_EXERCISES_ITEM} from '../constants/excercisesItem.constant';

const initialState = {
  data: exercisesItemData,
};

export default function exercisesItemReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_EXERCISES_ITEM.SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}
