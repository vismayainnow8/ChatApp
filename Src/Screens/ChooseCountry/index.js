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
import CountryRenderItem from './CountryRenderItem';

const ChooseCountry = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [countryListArray, setCountryArrayList] = useState(null);
  const phone = useRef(null);

  const countryListwithId = countryList.forEach((o, i) => o.id = i + 1);
 
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

  function onPressItem(item) {
    setSelectedId(item.code)
    //   name = {
    //         countryName: item.name
    // };
    // code = {
    //   countryCode: item.code
    // };
        props.setCountryName(item.name);
    props.setCountryCode(item.code);
    console.log("item.name",item.name)
    console.log("item.code",item.code)
    
    props.navigation.navigate('Login')

  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#075e54"
      />
      <FlatList
        data={countryList}
        renderItem={({ item, index }) => (<CountryRenderItem item={item} selectedId={selectedId} onPressItem={ (item)=>onPressItem(item)}/>)}
        keyExtractor={(item) => item.id}
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

