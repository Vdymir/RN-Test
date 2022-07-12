import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Ajustes from '../../screens/ajustes';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#f9f9f9',
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Viajes"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="flight" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Ajustes}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
