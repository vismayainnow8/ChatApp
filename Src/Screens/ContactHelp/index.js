import React, {useState, useLayoutEffect} from 'react';
import {Text, ScrollView, FlatList, StatusBar, Image, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const ContactHelp = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Contact Help',
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
      <View style={styles.detailedlistItemContainer}>
        <Text style={styles.nameText}>
          If some of your friends don't appear in the contacts list, we
          recommmend the following steps:
        </Text>
        <View style={styles.dotView}>
          <Text style={styles.dotStyle}>.</Text>
          <Text style={styles.dotText}>
            Make sure that your friend's phone number is in your address book
          </Text>
        </View>

        <View style={styles.dotView}>
          <Text style={styles.dotStyle}>.</Text>
          <Text style={styles.dotText}>
            Make sure that your friend is using Whatsapp Messenger
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactHelp;
