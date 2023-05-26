import { createStore } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import appReducer from "./reducer";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);