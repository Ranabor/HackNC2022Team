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
import ImagePicker, {launchImageLibrary} from 'react-native-image-picker';
import Scanner from './Scanner';
// import AsyncStorage from '@react-native-async-storage/async-storage';

class RecogScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      textCodes: '',
      textPrices: '',
      showConfirm: true,
      dictionary: 'here',
      updateLimit: true,
    };
  }
  componentDidMount() {
    this.setState({text: 'Please Upload A Receipt'});
  }

  imageGalleryLaunchCodes() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      const path = res.assets[0].uri;
      (async () => {
        const result = await TextRecognition.recognize(path);
        this.setState({textCodes: result});
      })();
    });
  }

  imageGalleryLaunchPrices() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      const path = res.assets[0].uri;
      (async () => {
        const result = await TextRecognition.recognize(path);
        this.setState({textPrices: result});
      })();
    });
  }

  componentDidUpdate() {
    if (this.state.updateLimit == true)
      if (this.state.textCodes != '' && this.state.textPrices != '') {
        this.setState({showConfirm: true});
        this.setState({updateLimit: false});
      }
  }

  getReceiptInfo = async () => {
    function codeReader(receiptCodes) {
      tempStr = '';
      const dpciList = [];
      returnValue = false;
      for (let i = 0; i == receiptCodes.length; i++) {
        if (i == receiptCodes.length) {
          returnValue == true;
        }
        char = receiptCodes.substring(i);
        console.log(char);
        if (isNaN(char) == false) {
          tempStr += char;
          if (tempStr.length == 9) {
            dpciList.push(tempStr);
            tempStr = '';
          }
        } else {
          tempStr = '';
        }
      }
      if (returnValue == true) {
        return dpciList;
      }
    }
    const result = await codeReader('057101346086134358');
    console.log(result);

    this.setState({dictionary: result});
  };

  render() {
    return (
      <View>
        <View>
          <Text>{this.state.dictionary}</Text>
          {this.state.showConfirm && (
            <Button title="Confirm" onPress={() => this.getReceiptInfo()} />
          )}
          <Button
            title="Upload Photo Of Codes"
            onPress={() => this.imageGalleryLaunchCodes()}
          />
          <Text>
            Codes:
            {this.state.textCodes}
          </Text>
          <Button
            title="Upload Photo Of Prices"
            onPress={() => this.imageGalleryLaunchPrices()}
          />
          <Text>
            Prices:
            {this.state.textPrices}
          </Text>
        </View>
      </View>
    );
  }
}

export default RecogScreen;
