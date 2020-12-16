import React from 'react';
import {View, Text, Image} from 'react-native';
import {SmallButton} from '../../Components';
import styles from './styles';

const WelcomeScreen = ({navigation}) => {
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
