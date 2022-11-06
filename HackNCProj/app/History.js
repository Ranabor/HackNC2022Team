import React, {useState, useEffect, Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import colors from './config/colors';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PieChart, LineChart, Grid} from 'react-native-svg-charts';
import {LocaleConfig, Calendar} from 'react-native-calendars';
import { background, backgroundColor, styles } from 'styled-system';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      dateValue: '',
      values: [],
      month: '',
    };
  }

  componentDidMount() {
    this.dataSetup();
  }
  money = [];
  dataSetup = async () => {
    await AsyncStorage.setItem('2022-11-05', '$20');
    await AsyncStorage.setItem('2022-11-04', '$30');
    await AsyncStorage.setItem('2022-11-03', '$40');
    await AsyncStorage.setItem('2022-11-02', '$10');
    await AsyncStorage.setItem('2022-11-01', '$23');
  };

  retrieveData = async () => {
    this.setState({values: this.state.dateValue.split('-')});
    this.setState({data: await AsyncStorage.getItem(this.state.dateValue)});
  };

  render() {
    const dataPie = [20, 30, 40, 10, 23];
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
      <View>
        <Calendar
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: colors.background,
            textSectionTitleColor: colors.white,
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: colors.muted,
            todayTextColor: '#00adf5',
            dayTextColor: colors.white,
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#26619c',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: colors.white,
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          minDate={'2022-10-01'}
          maxDate={'2022-11-31'}
          onDayPress={day => {
            const dateStuff = day['dateString'];
            this.setState({dateValue: dateStuff});
            this.retrieveData();
          }}
          onDayLongPress={day => {
            const dateStuff = day['dateString'];
            this.setState({dateValue: dateStuff});
            this.retrieveData();
          }}
          monthFormat={'MMMM yyyy'}
          onMonthChange={month => {
            console.log(month);
          }}
          hideExtraDays={true}
          firstDay={1}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          disableAllTouchEventsForDisabledDays={true}
          enableSwipeMonths={true}
        />
        <View style = {{backgroundColor: '#444'}}>
          <Text style = {{color: '#ddd', fontSize: 22}}>
            On {this.state.values[2]}/{this.state.values[1]}/
            {this.state.values[0]} you spent {this.state.data} at Target
          </Text>
        
          <PieChart style={{height: '60%', marginTop: 40}} data={pieData} />
        </View>
      </View>
    );
  }
}

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'June',
    'July',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tueday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
  today: 'Today',
};
LocaleConfig.defaultLocale = 'en';
export default History;
