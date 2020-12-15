import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SmallButton} from '../../Components';
import styles from './styles';
import {consts, countryList} from '../../Assets/Consts';

const Login = ({navigation, route}) => {
  const [number, setNumber] = useState(null);
  const [country, setCountry] = useState(countryList[0]);

  const [borderBottomWidthCountry, setBorderBottomWidthCountry] = useState(1);
  const [borderBottomWidthCode] = useState(1);
  const [borderBottomWidthPhone, setBorderBottomWidthPhone] = useState(1);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (route.params?.country) {
      setCountry(route.params.country);
    }
  }, [route.params?.country]);
  const onPressCountry = () => {
    setBorderBottomWidthCountry(2);
    navigation.navigate('ChooseCountry');
  };

  const onFocus = () => {
    setBorderBottomWidthPhone(2);
  };
  const signInWithPhoneNumber = async () => {
    if (!number)
      return Alert.alert('', 'Please enter your phone number', [
        {text: 'OK', onPress: () => console.log('Cancel Pressed')},
      ]);

    setLoading(true);
    try {
      const phoneNumber = country.code + number;
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      if (confirmation) {
        navigation.navigate('OTPScreen', {
          confirmation: confirmation,
          number: phoneNumber,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator
          color="#128c7e"
          size={consts.textSizes(20)}
          style={{flex: 1, paddingVertical: 30}}
        />
      ) : (
        <View style={styles.mainContainer}>
          <Text style={styles.firstLine}>
            Whatsapp will send an SMS message to verify your phone number.{' '}
          </Text>

          <TouchableOpacity
            style={[
              styles.countryContainer,
              {borderBottomWidth: borderBottomWidthCountry},
            ]}
            onPress={() => onPressCountry()}>
            <Text>{country.name}</Text>

            <AntDesign
              name="caretdown"
              color="#128c7e"
              size={15}
              style={{
                position: 'absolute',
                right: 0,
              }}
            />
          </TouchableOpacity>
          <View style={styles.secondContainer}>
            <View
              style={[
                styles.countryCodeContainer,
                {borderBottomWidth: borderBottomWidthCode},
              ]}>
              <Text>{country.code}</Text>
            </View>
            <TextInput
              style={[
                styles.phoneNumberContainer,
                {
                  borderBottomWidth: borderBottomWidthPhone,
                  color: 'black',
                },
              ]}
              placeholder="phone number"
              onChangeText={(text) => setNumber(text)}
              onFocus={() => onFocus()}
              onSubmitEditing={() => signInWithPhoneNumber()}
            />
          </View>
          <Text style={styles.plus}>Carrier SMS charges may apply</Text>
          <SmallButton
            title="NEXT"
            labelStyle={styles.labelStyle}
            style={styles.style}
            onPress={() => signInWithPhoneNumber()}
          />
        </View>
      )}
    </View>
  );
};

export default Login;
