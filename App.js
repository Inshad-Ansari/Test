/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { Provider, connect } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from "./app/utils/store";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator, { navigationRef } from './app/navigation/RootNavigator'
import FlashMessage from "react-native-flash-message";
const App: () => React$Node = () => {
  useEffect(() => {

  }, [])
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer ref={navigationRef}>
            <RootNavigator></RootNavigator>
          </NavigationContainer>
        </PersistGate>
        <FlashMessage position="top" />
      </Provider>
    </>
  );
};



export default App;
