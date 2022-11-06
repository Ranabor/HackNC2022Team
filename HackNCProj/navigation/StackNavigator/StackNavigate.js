import 'react-native-gesture-handler';
import React from 'react';
import RecogScreen from '../../app/RecogScreen';
// import Scanner from '../../app/Scanner';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recognize" component={RecogScreen} />
      {/* <Stack.Screen name="Scanner" component={Scanner} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
