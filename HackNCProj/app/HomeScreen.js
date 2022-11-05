import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import colors from './config/colors';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hack NC</Text>
      <View style={styles.startButtonContainer}>
        <Link />

        <View style={styles.gap}></View>

        <Button
          title=""
          color={colors.secondary}
          onPress={() => navigation.navigate('')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  gap: {
    height: '10%',
  },
  startButtonContainer: {
    flexDirection: 'column',
    width: '50%',
    alignSelf: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 50,
    textAlign: 'center',
    top: '10%',
    position: 'absolute',
  },
});
