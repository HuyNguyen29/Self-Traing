import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducers/_rootReducer';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './sagas/_rootSaga';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const sagaMiddleware = createSagaMiddleware();
// const middleware = [logger, sagaMiddleware];

// const store = configureStore({
//   reducer: rootReducer,
//   middleware,
// });

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];
const store = configureStore({
  reducer: persistedReducer,
  middleware,
});
// const store = configureStore({
//   reducer: rootReducer,
//   middleware,
// });
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export {store, persistor};

// export {store, persistor};
