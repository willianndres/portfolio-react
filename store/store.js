import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import indexSlice from './slices';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ["theme", "lang"],
    blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, indexSlice);
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;
