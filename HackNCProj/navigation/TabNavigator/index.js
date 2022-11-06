import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../app/HomeScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RecogScreen from '../../app/RecogScreen';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'History':
      iconName = 'appstore-o';
      break;
    case 'Scanner':
      iconName = 'folder1';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}>
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
