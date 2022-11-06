import React, {useState, useEffect, Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import TextRecognition from 'react-native-text-recognition';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

class RecogScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      text: '',
    };
  }
  componentDidMount() {
    this.setState({text: 'Please Upload A Receipt'});
  }

  retrieve() {}

  render() {
    return (
      <View>
        <Button
          title="Upload Photo"
          onPress={() => navigation.navigate('Scanner')}
        />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default RecogScreen;
