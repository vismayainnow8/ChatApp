import React, {useState, useLayoutEffect} from 'react';
import {Text, ScrollView, FlatList, StatusBar, Image, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {consts} from '../../Assets/Consts';

const ChangeNumber = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Change Number',
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
    <ScrollView style={styles.mainContainer}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <View style={styles.contentContainer}>
        <View style={styles.image}>
          <IconMaterialIcons
            name="smartphone"
            size={consts.ScreenWidth * 0.2}
            color="white"
          />
        </View>
        <View style={styles.detailedlistItemContainer}>
          <Text style={styles.nameText}>
            CHange your phone number will migrate your account info ,groups &
            settings
          </Text>
          <Text style={styles.statusText}>
            Before proceeding,please confirm that you are able to recieve SMS or
            calls at your new number
          </Text>
          <Text style={styles.statusText}>
            f you have both a new phone & a new number , first change your
            number on your old phone.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChangeNumber;
