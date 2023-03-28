import { CLEAR_ALL_ERROR } from '../constants/error.constant';

export const clearAllError = () => ({
  type: CLEAR_ALL_ERROR
});

export const clearError = error => ({
  type: CLEAR_ALL_ERROR,
  error
});
