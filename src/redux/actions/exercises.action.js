import {GET_EXERCISES} from '../constants/excercises.constant.js';

export const getExercisesSuccess = payload => ({
  type: GET_EXERCISES.SUCCESS,
  payload,
});
