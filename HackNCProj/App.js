import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import HomeScreen from './app/HomeScreen';
// // import RecogScreen from './app/RecogScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();
// const StackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       {/* <Stack.Screen name="Recognize" component={RecogScreen} /> */}
//     </Stack.Navigator>
//   );
// };

// export default function FirstApp() {
//   return (
//     <NavigationContainer>
//       <StackNavigator />
//     </NavigationContainer>
//   );
// }

// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { FaHome, FaCalendar} from 'react-icons/fa';
// import { IoMdQrScanner } from 'react-icons/io';


// function Home() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function History() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>History!</Text>
//     </View>
//   );
// }

// function Scanner() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Scanner!</Text>
//     </View>
//   );
// }

// const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#e91e63"
//       labelStyle={{ fontSize: 12 }}
//       style={{ backgroundColor: 'tomato' }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//             <FaHome size={26}/>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="History"
//         component={History}
//         options={{
//           tabBarLabel: 'History',
//           tabBarIcon: ({ color }) => (
//             <FaCalendar size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Scanner"
//         component={Scanner}
//         options={{
//           tabBarLabel: 'Scanner',
//           tabBarIcon: ({ color }) => (
//             <IoMdQrScanner size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

import React from 'react';

import RootNavigator from './navigation/RootNavigator';

export default function FirstApp() {
  return (
    <>
      <StatusBar hidden />
      <RootNavigator />
    </>
  );
};

