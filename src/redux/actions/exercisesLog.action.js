import {GET_EXERCISES_LOG} from '../constants/exercisesLog.constant';

export const getExercisesLogSuccess = payload => ({
  type: GET_EXERCISES_LOG.SUCCESS,
  payload,
});
