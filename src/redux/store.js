import {
    configureStore,
    combineReducers,
} from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer
} from 'redux-persist'
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage'

import personasSlice from './personasSlice'

const combinedReducers = combineReducers({
    [personasSlice.reducerPath]: personasSlice.reducer,
})

const persistConfig = {
      key: 'reduxStore',
      storage: AsyncStorage,
      //blacklist: ['anotherSlice'],
}

const persistedReducer = persistReducer(persistConfig, combinedReducers)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)