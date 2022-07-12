import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home';
import TabsNavigation from '../tabs';
import Login from '../../screens/login';

const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={TabsNavigation} />
    </Stack.Navigator>
  );
}
