import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';

import {persistReducer} from 'redux-persist';
import authReducer from './auth.reducer';
import exercisesReducer from './exercises.reducer';
import exercisesItemReducer from './exercisesItem.reducer';

import errorReducer from './error.reducer';
import loading from './loading.reducer';
import exercisesLogReducer from './exercisesLog.reducer';

const persistAuthConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistExercisesConfig = {
  key: 'exercises',
  storage: AsyncStorage,
};

const persistExercisesItemConfig = {
  key: 'exercisesItem',
  storage: AsyncStorage,
};

const persistExercisesLogConfig = {
  key: 'exercisesLog',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAuthConfig, authReducer),
  exercises: persistReducer(persistExercisesConfig, exercisesReducer),
  exercisesItem: persistReducer(
    persistExercisesItemConfig,
    exercisesItemReducer,
  ),
  exercisesLog: persistReducer(persistExercisesLogConfig, exercisesLogReducer),
  error: errorReducer,
  loading,
});
export default rootReducer;
