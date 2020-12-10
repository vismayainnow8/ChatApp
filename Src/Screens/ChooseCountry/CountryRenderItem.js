import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const CountryRenderItem = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.detailedlistItemContainer}
        onPress={() => props.onPressItem(props.item)}>
        <View style={styles.flagContainer}></View>
        <View style={styles.detailednameContainer}>
          <Text style={styles.nameText}>{props.item.name}</Text>
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
      </TouchableOpacity>
    </View>
  );
};

export default CountryRenderItem;
