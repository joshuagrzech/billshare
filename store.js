import { createStore, applyMiddleware, compose } from 'redux';
import AstroReducers from './reducers'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, AstroReducers)

const epicMiddleware = createEpicMiddleware();


export const store = createStore(
    persistedReducer,
    applyMiddleware(createEpicMiddleware(rootEpic))
)


export const persistor = persistStore(store)

epicMiddleware.run(rootEpic);
console.log('running')