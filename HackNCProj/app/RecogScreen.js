import React, {useState, useEffect, Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import TextRecognition from 'react-native-text-recognition';
import ImagePicker, {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from './config/colors';

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
      sum: 0,
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
    const a = [1, 2];
    if (this.state.updateLimit == true)
      if (this.state.textCodes != '' && this.state.textPrices != '') {
        this.setState({showConfirm: true});
        this.setState({updateLimit: false});
      }
  }

  getReceiptInfo = async () => {
    await AsyncStorage.setItem('prices', JSON.stringify([109.99, 8.01, 20.5]));
    this.setState({dictionary: await AsyncStorage.getItem('prices')});
  };

  render() {
    return (
      <View style={styles.container1}>
        <Text>{this.state.sum}</Text>
        <View style={styles.titlerow}>
          <Text style={styles.title}>UPLOAD</Text>
        </View>

        <View style={styles.dualrow}>
          <View style={styles.button}>
            <Button
              title="Codes"
              onPress={() => this.imageGalleryLaunchCodes()}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Prices"
              onPress={() => this.imageGalleryLaunchPrices()}
            />
          </View>
        </View>

        <View style={styles.labelrow}>
          <ScrollView style={styles.outputbox}>
            <Text style={styles.title1}>{this.state.textCodes}</Text>
          </ScrollView>
          <ScrollView style={styles.outputbox}>
            <Text style={styles.title1}>{this.state.textPrices}</Text>
          </ScrollView>
        </View>

        {this.state.showConfirm && (
          <Button
            style={{borderRadius: 5}}
            title="Confirm"
            onPress={() => this.getReceiptInfo()}
          />
        )}
      </View>
    );
  }
}

export default RecogScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20,
    flexWrap: 'wrap',
  },
  titlerow: {
    flex: 3,
    textAlign: 'center',
    fontSize: 24,
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
    flex: 1,
    alignContent: 'center',
  },
  titlerow: {
    flex: 0.5,
    backgroundColor: colors.background,
    flexDirection: 'row',
  },
  labelrow: {
    flex: 3,
    backgroundColor: colors.background,
    flexDirection: 'row',
  },
  dualrow: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'row',
    width: '100%',
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
    color: '#333',
    flex: 1,
  },
  title2: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#bbb',
  },
  bufferrow: {
    flex: 1,
  },
  button: {
    flex: 1,
    margin: 5,
    height: 50,
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  outputbox: {
    backgroundColor: '#eee',
    alignContent: 'center',
    marginHorizontal: 10,
    marginBottom: 30,
    flex: 1,
  },
});
