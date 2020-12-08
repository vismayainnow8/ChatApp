import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import {connect} from 'react-redux';
import {
  FlatList,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {setCountryName,setCountryCode} from '../../StateManagement/Actions';
import {countryList} from '../../Assets/Consts';

const ChooseCountry = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [countryListArray, setCountryArrayList] = useState(null);
  const phone = useRef(null);

 
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'Choose a country',
      headerRight: () => {
        return (
          <Ionicons
            name="search"
            size={24}
            color="#128c7e"
            style={{paddingRight: 15}}
          />
        );
      },
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
        borderBottomWidth: 0.6,
        borderBottomColor: 'grey',
      },
      headerTintColor: '#128c7e',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  function onPressItem  (item)  {
      name = {
            countryName: item.name
    };
    code = {
      countryCode: item.code
    };
        props.setCountryName(name);
    props.setCountryCode(code);
    console.log("dispatchvariables",code,name)
    
    props.navigation.navigate('Login')

  }
  const renderItem = ({item}) => {
    const Item = ({item, onPress, style}) => (
      <TouchableOpacity
        style={styles.detailedlistItemContainer}
        // onPress={() => alert('item.code')}
        onPress={() => onPressItem(item)}

      >
        <View style={styles.flagContainer}>
          {/* <Entypo
            name="flag"
            color="#128c7e"
            size={23}
            style={{paddingVertical: 5}}
          /> */}
        </View>
        <View style={styles.detailednameContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          {/* <Text style={styles.statusText}>{item.code}</Text> */}
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.nameText}>{item.code}</Text>
        </View>
        <View style={styles.tickContainer}>
          {item.code == selectedId ? (
            <Entypo
              name="check"
              color="#128c7e"
              size={23}
              style={{padding: 5}}
            />
          ) : null}
        </View>
      </TouchableOpacity>
    );
    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.code)}
        // style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#075e54"
        // barStyle="dark-content"
      />
      <FlatList
        data={countryList}
        renderItem={renderItem}
        // keyExtractor={(item) => item.code}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCountryCode: (data) => dispatch(setCountryCode(data)),
    setCountryName: (data) => dispatch(setCountryName(data)),
  };
};

export default connect(null, mapDispatchToProps)(ChooseCountry);

