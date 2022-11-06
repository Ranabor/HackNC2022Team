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

import RootNavigator from './navigation/RootNavigator';

export default function FirstApp() {
  return (
    <>
      <StatusBar hidden />
      <RootNavigator />
    </>
  );
}
