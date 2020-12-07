import React, {useState, useLayoutEffect} from 'react';
import {Text, ScrollView, StatusBar, FlatList, Image, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {consts} from '../../Assets/Consts';

const RequestAccountInfo = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Starred messages',
      headerStyle: {
        backgroundColor: '#075e54',
        // backgroundColor: contactSearchpress ? 'white' : '#075e54',
        elevation: 0,
      },
      headerTintColor: 'white',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <View style={styles.centerContainer}>
        <View style={styles.image}>
          <IconAntDesign
            name="star"
            size={consts.ScreenWidth * 0.2}
            color="white"
          />
        </View>
        <Text style={styles.nameText}>
          Tap and hold on any messages in any chat message to star it, so you
          can easily find it later
        </Text>
      </View>
    </View>
  );
};

export default RequestAccountInfo;
