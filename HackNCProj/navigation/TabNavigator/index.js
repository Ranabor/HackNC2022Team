import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../app/HomeScreen';
import History from '../../app/History';

import RecogScreen from '../../app/RecogScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarIconStyle: { display: "none" },tabBarLabelStyle: {
      fontWeight: "700",
      fontSize: 28,
      alignSelf: 'center',
    }}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scanner" component={RecogScreen} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
