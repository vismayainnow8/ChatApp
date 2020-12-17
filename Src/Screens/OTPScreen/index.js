import React, {useLayoutEffect,useEffect} from 'react';
import {View, Text} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import styles from './styles';

const OTPScreen = ({navigation, route}) => {
  const {number, confirmation} = route.params;
  useEffect(() => {
    console.log("jkjk",number)
  })
  const confirmCode = async (code) => {
    try {
      await confirmation.confirm(code);
    } catch (error) {
      Alert.alert('', 'Invalid OTP .Please try again', [
        {text: 'OK', onPress: () => console.log('Cancel Pressed')},
      ]);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Verify ' + number,
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerTintColor: '#128c7e',
    });
  });

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.firstLine}>
        Waiting to automatically detect anSMS sent to {number}. Wrong number?
      </Text>
      <View style={{flex: 1}}>
        <CodeInput
          activeColor={'black'}
          inactiveColor={'black'}
          space={5}
          codeLength={6}
          size={40}
          keyboardType="number-pad"
          className="border-b"
          inputPosition="center"
          containerStyle={{marginTop: 0, marginBottom: 0}}
          inputPosition="left"
          onFulfill={(code) => confirmCode(code)}
        />
      </View>
      <View style={{flex: 5, width: '100%'}}>
        <Text style={styles.plus}>Enter a 6-digit code</Text>
      </View>
    </View>
  );
};

export default OTPScreen;
