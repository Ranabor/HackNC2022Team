import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import colors from './config/colors';
import {useNavigation} from '@react-navigation/native';
import {flexDirection} from 'styled-system';
import {PieChart, LineChart, Grid} from 'react-native-svg-charts';

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
  const dataPie = [80, 20, 100, 60];
  const dataLine = [50, 60, 100, 70, 120, 80];
  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7,
    );

  const pieData = dataPie
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));

  return (
    
    <View style={styles.container1}>
      <View style={styles.titlerow}>
        <View style={styles.titlebox}>
          <Text style={styles.title1}>Favorite Company</Text>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.title1}>Spending Changes</Text>
        </View>
      </View>

      <View style={styles.dualrow}>
        <View style={styles.box}>
          <Text style={styles.company}>Target</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.changes}>+2.34%</Text>
        </View>
      </View>

      <View style={styles.titlerow}>
        <View style={styles.titlebox}>
          <Text style={styles.title2}>Monthly Spending</Text>
        </View>
      </View>

      <View style={styles.bigrow}>
        <Text style={styles.spending}>$4,925.98</Text>
      </View>

      <View style={styles.titlerow}>
        <View style={styles.titlebox}>
          <Text style={styles.title1}>Breakdown</Text>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.title1}>Spending Over Time</Text>
        </View>
      </View>

      <View style={styles.dualrow}>
        <View style={styles.box}>
          <PieChart style={{height: '100%'}} data={pieData} />
        </View>
        <View style={styles.box}>
          <LineChart
            style={{height: '90%'}}
            data={dataLine}
            svg={{stroke: 'green'}}
            contentInset={{top: 20, bottom: 0}}>
            <Grid />
          </LineChart>
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
  titlerow: {
    flex: 5,
    backgroundColor: colors.background,
    flexDirection: 'row',
    
  },
  dualrow: {
    flex: 20,
    backgroundColor: colors.background,
    flexDirection: 'row',
  },
  bigrow: {
    flex: 30,
    borderRadius: 30,
    margin: 10,
    borderColor: '#26619c',
    backgroundColor: '#454545',
    borderWidth: 3,
  },
  box: {
    borderRadius: 30,
    flex: 50,
    margin: 10,
    padding: 5,
    borderColor: '#26619c',
    backgroundColor: '#454545',
    borderWidth: 3,
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
    color: '#bbb',
  },
  title2: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#bbb',
  },
  company: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '800',
    margin: 10,
    flex: 1,
    color: '#bbb',
  },
  changes: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '800',
    margin: 10,
    flex: 1,
    color: '#55A348',
  },
  spending: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 60,
    fontWeight: '800',
    margin: 10,
    flex: 1,
    color: '#bbb',
    
  },
  // rate: {
  //   textAlign: 'center',
  //   alignContent: 'center',
  //   fontSize: 40,
  //   fontWeight: '800',
  //   color: '#13f643',
  // }
});
