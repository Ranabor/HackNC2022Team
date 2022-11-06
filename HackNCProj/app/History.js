import React, {useState, useEffect, Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import colors from './config/colors';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {LocaleConfig, Calendar} from 'react-native-calendars';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      dateValue: '',
    };
  }

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = async () => {
    this.setState({data: await AsyncStorage.getItem('data')});
  };

  retrieveData = async () => {};

  render() {
    return (
      <View>
        <Calendar
          minDate={'2022-10-01'}
          maxDate={'2022-11-31'}
          onDayPress={day => {
            const dateStuff = day['day'];
            this.setState({dateValue: dateStuff});
          }}
          onDayLongPress={day => {
            this.setState({dateValue: day});
          }}
          monthFormat={'MM/yyyy'}
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          hideExtraDays={true}
          firstDay={1}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          disableAllTouchEventsForDisabledDays={true}
          enableSwipeMonths={true}
        />
        <Text>{this.state.dateValue}</Text>
      </View>
    );
  }
}

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';
export default History;
