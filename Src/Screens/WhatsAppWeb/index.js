import React, {useState, useLayoutEffect} from 'react';
import {Text, ScrollView, FlatList, Image, StatusBar, View} from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const WhatsAppWeb = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Scan QR code',

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
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            To use WhatsApp Web go to web.whatsapp.com on your computer
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default WhatsAppWeb;
