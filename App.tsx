import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/routers/stack';
import LoginProvider from './src/context/LoginContext';

export default function App() {
  return (
    <NavigationContainer>
      <LoginProvider>
        <StackNavigation />
      </LoginProvider>
    </NavigationContainer>
  );
}
