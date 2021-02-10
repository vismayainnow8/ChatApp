import React, {useState, useRef, useLayoutEffect, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import {consts} from '../../Assets/Consts';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {RNCamera} from 'react-native-camera';
import {ImagePreview} from './Components';

const Camera = (props) => {
  const [data, setData] = useState(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  let cameraRef;
  // const navigation = useNavigation();
  const takePicture = async () => {
    if (cameraRef) {
      // cameraRef.pausePreview()
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.takePictureAsync(options);
      console.log('datasssssssss', data);
      setData(data.uri);
      navigation.navigate('ImagePreview', {cameraImageUri: data.uri});
      // return <ImagePreview />;
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => (cameraRef = ref)}
        type={RNCamera.Constants.Type.front}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          // console.log('barcodes',barcodes);
        }}
      />
      <View style={styles.captureView}>
        <TouchableOpacity onPress={() => takePicture()} style={styles.capture}>
          <Text style={styles.captureText}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Camera;
