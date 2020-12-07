import React, {useState, useRef, useEffect} from 'react';
// import React from "react";
import {Button, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export const ContactHeaderRight = (props) => {
  const [searchpress, setSearchpress] = useState(false);
  const onSearchPress = (searchpress = true) => {
    props.giveData(searchpress);
    setSearchpress(true);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      {searchpress ? null : (
        <IconAntDesign
          onPress={() => onSearchPress()}
          name="search1"
          size={24}
          color="white"
        />
      )}
      {searchpress ? null : (
        <Icon name="dots-three-vertical" size={24} color="white" />
      )}
    </View>
  );
};
