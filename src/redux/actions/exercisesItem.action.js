import {GET_EXERCISES_ITEM} from '../constants/excercisesItem.constant';

export const getExercisesItemSuccess = payload => ({
  type: GET_EXERCISES_ITEM.SUCCESS,
  payload,
});
