import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import colors from './config/colors';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNTextDetector from 'rn-text-detector';

const [state, setState] =
  useState <
  {
    loading: boolean,
    image: string | null,
    toast: {
      message: string,
      isVisible: boolean,
    },
    textRecognition: [] | null,
  } >
  {
    loading: false,
    image: null,
    textRecognition: null,
    toast: {
      message: '',
      isVisible: false,
    },
  };

function onPress(type) {
  setState({...state, loading: true});
  type === 'capture'
    ? launchCamera({mediaType: 'image'}, onImageSelect)
    : launchImageLibrary({mediaType: 'image'}, onImageSelect);
}
async function onImageSelect(media) {
  if (!media) {
    setState({...state, loading: false});
    return;
  }
  if (!!media && media.assets) {
    const file = media.assets[0].uri;
    const textRecognition = await RNTextDetector.detectFromUri(file);
    const INFLIGHT_IT = 'Inflight IT';
    //if match toast will appear
    const matchText = textRecognition.findIndex(item =>
      item.text.match(INFLIGHT_IT),
    );
    setState({
      ...state,
      textRecognition,
      image: file,
      toast: {
        message: matchText > -1 ? 'Ohhh i love this company!!' : '',
        isVisible: matchText > -1,
      },
      loading: false,
    });
  }
}

return (
  <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>RN OCR SAMPLE</Text>
      <View style={getSpace(20)}>
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={() => onPress('capture')}>
          <Text>Take Photo</Text>
        </TouchableOpacity>
        <View style={getSpace(20)}>
          <TouchableOpacity
            style={[styles.button, styles.shadow]}
            onPress={() => onPress('library')}>
            <Text>Pick a Photo</Text>
          </TouchableOpacity>
        </View>
        <View style={getSpace(50)}>
          <WrapLoading loading={state.loading}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={[styles.image, styles.shadow]}
                source={{uri: state.image}}
              />
            </View>
            {!!state.textRecognition &&
              state.textRecognition.map((item, i) => (
                <Text key={i} style={getSpace(10)}>
                  {item.text}
                </Text>
              ))}
          </WrapLoading>
        </View>
      </View>
      {state.toast.isVisible &&
        ToastAndroid.showWithGravityAndOffset(
          state.toast.message,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        )}
    </View>
  </SafeAreaView>
);
