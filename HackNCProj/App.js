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
import HomeScreen from './app/HomeScreen';
// import RecogScreen from './app/RecogScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Recognize" component={RecogScreen} /> */}
    </Stack.Navigator>
  );
};

export default function FirstApp() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
