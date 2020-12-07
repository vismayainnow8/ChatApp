import React, {useState, useRef, useEffect} from 'react';
import {Button, TouchableOpacity, Text, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export const ContactHeaderLeft = (props) => {
  const [propsSearchpress, setPropSearchpress] = useState(
    props.propsContactSearchpress,
  );

  return (
    <View style={{flexDirection: 'row', backgrounColor: 'blue'}}>
      {props.propsContactSearchpress ? (
        <IconAntDesign name="arrowleft" size={24} color="#075e54" />
      ) : null}
      {props.propsContactSearchpress ? (
        <Text style={{color: 'grey'}}>Search...</Text>
      ) : null}
    </View>
  );
};
