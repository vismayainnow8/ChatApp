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

const CountryRenderItem = (props) => {
       
  return (
    <View >
    <TouchableOpacity
        style={styles.detailedlistItemContainer}
        onPress={() => props.onPressItem(props.item)}

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
          <Text style={styles.nameText}>{props.item.name}</Text>
          {/* <Text style={styles.statusText}>{item.code}</Text> */}
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.nameText}>{props.item.code}</Text>
        </View>
        <View style={styles.tickContainer}>
          {props.item.code == props.selectedId ? (
            <Entypo
              name="check"
              color="#128c7e"
              size={23}
              style={{padding: 5}}
            />
          ) : null}
        </View>
      {/* <Text>Hello World!</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default CountryRenderItem;


