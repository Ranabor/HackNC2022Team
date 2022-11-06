import React, {useState, useEffect, Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
  componentDidMount() {}

  upload;

  render() {
    return (
      <View>
        <Text>A</Text> {this.state.text ? <Text>{this.state.text}</Text> : null}
      </View>
    );
  }
}

// const RecogScreen = () => {
//   const [image, setImage] = useState(null);
//   const [text, setText] = useState(null);
//   useEffect(() => {
//     launchImageLibrary({}, setImage);
//   }, []);

//   useEffect(() => {
//     (async () => {
//       if (image) {
//         const result = await TextRecognition.recognize(image.assets[0].uri);
//         setText(result);
//       } else {
//         setText('No image chosen.');
//       }
//     })();
//   }, [image]);

//   return <View>{text ? <Text>{text}</Text> : null}</View>;
// };

export default RecogScreen;
