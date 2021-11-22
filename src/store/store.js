import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import userReducer from '../features/auth';

const persistConfig = {
    key: 'root',
    // version: 1,
    storage: AsyncStorage,
  }

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

let persistor = persistStore(store);

export { store, persistor };
