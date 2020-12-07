import {connect} from 'react-redux';
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
// import CountryCodeList from 'react-native-country-code-list';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
const OTPScreen = (props) => {
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [propsValue, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useEffect(() => {
    console.log('propsssssssssssssss', props.route.params.confirmation);
  }, []);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'Verify 123456678910',
      headerRight: () => {
        return (
          <Entypo
            onPress={() => alert('search')}
            name="dots-three-vertical"
            size={24}
            color="#128c7e"
            style={{paddingRight: 10}}
          />
        );
      },
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
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
      <CodeField
        activeColor={TITLE_COLOR}
        inactiveColor={LIGHT_COLOR}
        // space={5}
        // codeLength={4}
        size={60}
        keyboardType="number-pad"
        codeInputStyle={styles.codeInputStyle}
        inputPosition="center"
        // containerStyle={{ marginTop: 0 }}
        inputPosition="left"
        onFulfill={(code) => _onFulfill(code)}
        ref={ref}
        {...propsValue}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Text style={styles.plus}>Enter a 6-digit code</Text>

      <TouchableOpacity style={styles.itemContainer}>
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
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setCustomer: (data) => dispatch(setCustomer(data))
  };
};

const mapStateToProps = (state) => {
  console.log('reduxSTate', state);
  return {
    confirmation: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OTPScreen);
