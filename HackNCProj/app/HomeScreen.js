import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import colors from './config/colors';
import {useNavigation} from '@react-navigation/native';
import { flexDirection } from 'styled-system';

// const Link = () => {
//   const navigation = useNavigation();

//   return (
//     <Button
//       title="Start Test"
//       color={colors.secondary}
//       onPress={() => navigation.navigate('EnterID')}
//     />
//   );
// };

const HomeScreen = () => {
  return (
    <View style = {styles.container1}>
      <View style = {styles.titlerow}>
        
        <View style = {styles.titlebox}>
          <Text style = {styles.title1}>
            Favorite Company
          </Text>
        </View>
        <View style = {styles.titlebox}>
          <Text style = {styles.title1}>
            Spending Changes
          </Text>
        </View>

      </View>

      <View style = {styles.dualrow}>
        <View style = {styles.box}>
          <Text style = {styles.company}>
            Target
          </Text>
        </View>
        <View style = {styles.box}>
          <Text style = {styles.changes}>
            +2.34
          </Text>
        </View>
      </View>

      <View style = {styles.titlerow}>
        <View style = {styles.titlebox}>
          <Text style = {styles.title2}>
            Monthly Spending
          </Text>
        </View>
      </View>

      <View style = {styles.bigrow}>
        <Text style = {styles.spending}>
          $4,925.98
        </Text>
      </View>

      <View style = {styles.titlerow}>
        <View style = {styles.titlebox}>
          <Text style = {styles.title1}>
            Shopping Breakdown
          </Text>
        </View>
        <View style = {styles.titlebox}>
          <Text style = {styles.title1}>
            Spending Over Time
          </Text>
        </View>
      </View>

      <View style = {styles.dualrow}>
        <View style = {styles.box}>
          <Text style = {styles.breakdown}>
            $4,925.98
          </Text>
        </View>
        <View style = {styles.box}>
          <Text style = {styles.spending}>
            $4,925.98
          </Text>
        </View>
      </View>
      {/* <View style = {styles.titlebox}>
          <Text>Favorite Company</Text>
      </View>
      <View style = {styles.titlebox}>
          <Text>Favorite Company</Text>
      </View>
      <View style = {styles.box}>
        <Text style = {styles.company}>
          Target
        </Text>
      </View>
      <View style = {styles.box}>
        <Text style = {styles.rate}>
          2.34
        </Text>
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20,
    flexWrap: 'wrap',
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
  titlerow:{
    flex: 5,
    backgroundColor: colors.background,
    flexDirection: 'row',
  },
  dualrow:{
    flex: 20,
    backgroundColor: colors.background,
    flexDirection: 'row',
  },
  bigrow:{
    flex: 30,
    backgroundColor: '#abdbe3',
    borderRadius: 30,
    margin: 10,
  },
  box: {
    borderRadius: 30,
    flex: 50,
    backgroundColor: '#abdbe3',
    margin: 10,
  },
  titlebox: {
    backgroundColor: colors.background,
    justifyContent: 'space-around',
    margin: 2,
    alignContent: 'center',
    flex: 20,
  },
  title1: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title2: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  }
  // company: {
  //   textAlign: 'center',
  //   alignContent: 'center',
  //   fontSize: 40,
  //   fontWeight: '800',
  // },
  // rate: {
  //   textAlign: 'center',
  //   alignContent: 'center',
  //   fontSize: 40,
  //   fontWeight: '800',
  //   color: '#13f643',
  // }
});
