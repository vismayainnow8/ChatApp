import {connect} from 'react-redux';
import React, {useLayoutEffect, useEffect,useState} from 'react';
import {View, Text, Alert, TouchableOpacity,ActivityIndicator, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {SmallButton} from '../../Components';
import {setConfirmation} from '../../StateManagement/Actions';
import styles from './styles';
import {back} from 'react-native/Libraries/Animated/src/Easing';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
// import { useEffect } from 'react/cjs/react.production.min';
import {consts} from '../../Assets/Consts';

const Login = (props) => {
  const [number, setNumber] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [borderBottomWidthCountry, setBorderBottomWidthCountry] = useState(1);
  const [borderBottomWidthCode, setBorderBottomWidthCode] = useState(1);
  const [borderBottomWidthPhone, setBorderBottomWidthPhone] = useState(1);
  const [settingsPressed, setSettingsPressed] = useState(false);
  // const [countryName, setCountryName] = useState('props.route.params.name');
  // const [countryCode, setCountryCode] = useState('props.route.params.code');
  const [loading, setLoading] = useState(false);
  const [menuState, setMenuState] = useState(ChatMenu);
  var _menu = null;

  const setMenuRef = (ref) => {
    _menu = ref;
  };

  const showMenu = () => {
    _menu.show();
  };


  useEffect(() => {
    setLoading(false)
  }, );


  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'Enter your phone number',
      headerTitleAlign: 'center',
      // headerRight: () => {
      //   return (
      //     // <Menu
      //     //   ref={(ref) => setMenuRef(ref)}
      //     //   button={
      //     //     <Entypo
      //     //       onPress={() => showMenu()}
      //     //       name="dots-three-vertical"
      //     //       size={24}
      //     //       color="#128c7e"
      //     //       style={{paddingRight: 10}}
      //     //     />
      //     //   }>
      //     //   {menuState}
      //     // </Menu>
      //   );
      // },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
      },
      headerTintColor: '#128c7e',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  const signInWithPhoneNumber = async () => {
    setLoading(true)
    if (number) {
      const phoneNumber = props.countryCode+number;

      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log('confirmation',confirmation)
      if (confirmation) {
        setConfirm(confirmation);
        // actionData = {
        //     confirmation: 'confirmation'
        // };
        // setConfirmation(actionData);
        props.navigation.navigate('OTPScreen', {
          confirmation: confirmation,
          number:phoneNumber
        });
      }
    }
    else {
     
      Alert.alert(
        '',
        'Please enter your phone number',
        [
          { text: "OK", onPress: () => console.log('Cancel Pressed'), }
        ]
      )
    }
  };
  const submitPhoneNumber = () => {
    signInWithPhoneNumber();
  };

  const onPressCountry = () => {
    setBorderBottomWidthCountry(2);
    props.navigation.navigate('ChooseCountry');
  };

  const ChatMenu = (
    <View style={{backgroundColor: 'white'}}>
      <MenuItem onPress={() => navigation.navigate('NewGroup')}>Help</MenuItem>
    </View>
  );
//   useEffect(() => {
//   console.log('number',number)
// },[number])
  return (
<View style={{flex:1}}>
      {loading ?
        <ActivityIndicator color='#128c7e' size={consts.textSizes(20)} style={{ flex: 1, paddingVertical: 30 }} /> :
        <View style={styles.mainContainer}>
          <Text style={styles.firstLine}>
            Whatsapp will send an SMS message to verify your phone number.{' '}
            {/* <Text style={styles.firstBlueLine}>What's my number ?</Text> */}
          </Text>

          <TouchableOpacity
            style={[
              styles.countryContainer,
              { borderBottomWidth: borderBottomWidthCountry },
            ]}
            onPress={() => onPressCountry()}>
            <Text>{props.countryName}</Text>

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
                { borderBottomWidth: borderBottomWidthCode },
              ]}>
              
              <Text >{ props.countryCode}</Text>
              {/* <TextInput
                placeholder={props.countryCode}
                placeholderStyle={{color:"black"}}
                style={{ padding: 0,color:"black" }}
                onFocus={() => setBorderBottomWidthCode(2)}
              /> */}
            </View>
            <TextInput
              style={[
                styles.phoneNumberContainer,
                {
                  borderBottomWidth: borderBottomWidthPhone,
                },
              ]}
              placeholder="phone number"
              onChangeText={(text)=>setNumber(text)}
              onFocus={() => setBorderBottomWidthPhone(2)}
              onSubmitEditing={() => submitPhoneNumber()}
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
      }
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setConfirmation: (data) => dispatch(setConfirmation(data)),
  };
};

const mapStateToProps = (state, props) => {
  return {
    countryCode: state.country.countryName.countryCode,
    countryName: state.country.countryCode.countryName,
    ...props
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
