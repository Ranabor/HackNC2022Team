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
      image: null,
      text: '',
    };
  }
  componentDidMount() {
    this.setState({text: 'Please Upload A Receipt'});
  }

  retrieve = async () => {
    await this.setState({image: launchImageLibrary({})});
    if (this.state.image != null) {
      const result = await TextRecognition.recognize(
        this.state.image.assets[0].uri,
      );
      this.setState({text: result});
    }
  };

  render() {
    return (
      <View>
        <View>
          <Button title="Upload Photo" onPress={() => this.retrieve()} />
          <Text>{this.state.text}</Text>
        </View>
      </View>
    );
  }
}

export default RecogScreen;
