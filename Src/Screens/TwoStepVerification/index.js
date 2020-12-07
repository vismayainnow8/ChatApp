import React, {useState, useLayoutEffect} from 'react';
import {Text, ScrollView, FlatList, StatusBar, Image, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import {consts} from '../../Assets/Consts';

const TwoStepVerification = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Two-step verification',
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
            name="check"
            size={consts.ScreenWidth * 0.2}
            color="white"
          />
        </View>
        <Text style={styles.nameText}>
          Two-step verification is enabled .You 'll need to enter your PIN when
          registering your phone number with WhatsApp again
        </Text>
        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailediconContainer}>
            <Icon
              name="circle-with-cross"
              color="#075e54"
              size={23}
              style={{padding: 5}}
            />
          </View>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Disable</Text>
          </View>
        </View>
        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailediconContainer}>
            <IconFontisto
              name="move-h-a"
              color="#075e54"
              size={23}
              style={{padding: 5}}
            />
          </View>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Change Pin</Text>
          </View>
        </View>
        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailediconContainer}>
            <IconMaterialIcons
              name="email"
              color="#075e54"
              size={23}
              style={{padding: 5}}
            />
          </View>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>CHange email address</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TwoStepVerification;
