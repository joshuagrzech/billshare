import { createStore, applyMiddleware, compose } from 'redux';
import AstroReducers from './reducers'
import { createEpicMiddleware } from 'redux-observable';

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, AstroReducers)




export const store = createStore(
    persistedReducer
)


export const persistor = persistStore(store)


console.log('running')