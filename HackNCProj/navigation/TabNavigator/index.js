import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../app/HomeScreen';

import RecogScreen from '../../app/RecogScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scanner" component={RecogScreen} />
      <Tab.Screen name="History" component={HomeScreen} />
    </Tab.Navigator>
  );
};

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="History" component={HomeScreen} />
//       <Tab.Screen name="Scanner" component={HomeScreen} />
//     </Tab.Navigator>
//   );
// };

export default TabNavigator;
