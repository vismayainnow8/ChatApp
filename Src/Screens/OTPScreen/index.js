import {connect} from 'react-redux';
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';
// import CountryCodeList from 'react-native-country-code-list';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import CodeInput from 'react-native-confirmation-code-input'
import styles from './styles';
import {AppStack} from '../../Router/appStack';
// import  from './';
const OTPScreen = (props) => {
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  // const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [confirm, setConfirm] = useState(props.route.params.confirmation);
  const [number, setNumber] = useState(props.route.params.number);
  
  // const [propsValue, getCellOnLayoutHandler] = useClearByFocusCell({
  //   value,
  //   setValue,
  // });
  // useEffect(() => {
    console.log('propsssssssssssssss', props);
    // alert('propsssssssssssssss', props);
  // }, []);
  // async function confirmCode() {
  const confirmCode = async (code) => {
    // return <AppStack />;
props.navigation.navigate('AppStack')
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.', error);
props.navigation.replace('AppStack')
    }
  }
  
  
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'Verify '+{number},
      // headerRight: () => {
      //   return (
      //     <Entypo
      //       onPress={() => alert('search')}
      //       name="dots-three-vertical"
      //       size={24}
      //       color="#128c7e"
      //       style={{paddingRight: 10}}
      //     />
      //   );
      // },
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });



  return (
    <View style={styles.mainContainer}>
      {/* <CountryCodeList
            // onClickCell={(cellObject) =>
            //     console.log('cellObject', cellObject)
            // }
            /> */}
      <Text style={styles.firstLine}>
        Waiting to automatically detect anSMS sent to 123456789. Wrong number?
      </Text>
     <View style={{flex:1}}>
       <CodeInput
                activeColor={'black'}
                inactiveColor={'black'}
                space={5}
                codeLength={6}
                size={40}
        keyboardType='number-pad'
                // codeInputStyle={styles.codeInputStyle}
                className='border-b'
                inputPosition='center'
                containerStyle={{ marginTop: 0,marginBottom:0 }}
                inputPosition='left'
                onFulfill={(code) => confirmCode(code)}
        />
  </View>
     <View style={{flex:5,width:"100%"}}>
        
      <Text style={styles.plus}>Enter a 6-digit code</Text>

{/* <TouchableOpacity style={styles.itemContainer}>
  <View style={styles.iconContainer}>
    <Entypo name="message" color="grey" size={15} />
  </View>
  <View style={styles.textContainer}>
    <Text style={styles.grey}>Resend SMS</Text>
  </View>
  <View style={styles.timeContainer}>
    <Text style={styles.grey}>1:78</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity style={styles.itemContainer}>
  <View style={styles.iconContainer}>
    <FontAwesome name="phone" color="grey" size={15} />
  </View>
  <View style={styles.textContainer}>
    <Text style={styles.grey}>Call me</Text>
  </View>
  <View style={styles.timeContainer}>
    <Text style={styles.grey}>1:78</Text>
  </View>
        </TouchableOpacity> */}
    </View>
        
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setCustomer: (data) => dispatch(setCustomer(data))
  };
};

const mapStateToProps = (state) => {
  // console.log('reduxSTate', state);
  return {
    confirmation: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OTPScreen);
