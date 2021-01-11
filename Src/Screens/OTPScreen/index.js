import React, {useLayoutEffect,useEffect,useState} from 'react';
import {View, Text,Alert} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux';
import styles from './styles';
import {AppStack} from '../../Router/appStack';

const OTPScreen = (props) => {
  const confirmCode = async (code) => {
    try {
      await props.confirmation.confirm(code);
    } catch (error) {
      Alert.alert('', 'Invalid OTP .Please try again', [
        {text: 'OK', onPress: () => console.log('Cancel Pressed')},
      ]);
    }
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'Verify ' + props.phoneNumber,
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
        Waiting to automatically detect anSMS sent to {props.phoneNumber}. Wrong number?
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

// export default OTPScreen;

const mapStateToProps = (state,props) => {
  return {
    confirmation: state.confirmation.confirmation,
    phoneNumber: state.confirmation.number,
    ...props
  };
};

export default connect(mapStateToProps, null)(OTPScreen);