import 'react-native-gesture-handler' // This simply needs to be imported to enable, and at the top!
import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import LoadingScreen from './screens/LoadingScreen'
import MyNavigationContainer from './navigation/MyNavigationContainer'

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingScreen />} persistor={persistor}>
                <MyNavigationContainer />
            </PersistGate>
        </Provider>
    )
}