import React, {useLayoutEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {SmallButton} from '../../Components';
import styles from './styles';

const WelcomeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: 'Welcome to WhatsApp',
      // headerTitleAlign: 'center',
      // headerStyle: {
      //     backgroundColor: 'white',
      //     elevation: 0
      // },
      // headerTintColor: '#128c7e'
      headerShown: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Welcome to WhatsApp</Text>
      <Image
        source={require('../../Assets/welcomeImage.jpg')}
        style={styles.image}
      />
      <Text style={styles.textStatement}>
        Read our{' '}
        <Text style={styles.firstBlueLine}>
          Privacy Policy.{' '}
          <Text style={styles.textStatement}>
            Tap "Agree and continue" to accept the{' '}
            <Text style={styles.firstBlueLine}>Terms of Service</Text>
          </Text>
        </Text>
      </Text>

      <SmallButton
        title="AGREE AND CONTINUE"
        style={styles.style}
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default WelcomeScreen;
