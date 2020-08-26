import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './NavigationContainer'
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux'
import {store} from './store'
import {persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react'



const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  }
});

export default () => (
  <Provider store={store} style={{ backgroundColor: "blue" }}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer style={{ height: "100%" }}>
      
          <AppNavigator style={{ height: '100%' }} />
        
      </NavigationContainer>
    </PersistGate>
  </Provider>
);