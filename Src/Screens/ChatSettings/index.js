import React, {useState, useLayoutEffect} from 'react';
import {
  Text,
  ScrollView,
  FlatList,
  StatusBar,
  Image,
  Switch,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const ChatSettings = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Chats',
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
        <Text style={styles.headingText}>Display</Text>
        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailediconContainer}>
            <IconMaterialIcons
              name="brightness-6"
              color="#075e54"
              size={23}
              style={{padding: 5}}
            />
          </View>
          <View style={styles.detailedcallerDetailsContainer}>
            <Text style={styles.nameText}>Theme</Text>
            <Text style={styles.statusText}>Light</Text>
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailediconContainer}>
            <IconMaterialIcons
              name="wallpaper"
              color="#075e54"
              size={23}
              style={{padding: 5}}
            />
          </View>
          <View style={styles.detailedcallerDetailsContainer}>
            <Text style={styles.nameText}>Wallpaper</Text>
          </View>
        </View>

        <Text style={styles.headingText}>Chat Settings</Text>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailediconContainer}>
            {/* <IconAntDesign name="questioncircle" color="grey" size={23} style={{ padding: 5 }} /> */}
          </View>
          <View style={styles.detailedcallerDetailsContainer}>
            <Text style={styles.nameText}>Enter is send</Text>
            <Text style={styles.statusText}>
              Enter key will send your message
            </Text>
          </View>
          <View style={styles.detailediconContainer}>
            {/* <IconAntDesign name="questioncircle" color="grey" size={23} style={{ padding: 5 }} /> */}
            <Switch />
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailediconContainer}>
            {/* <IconMaterialIcons name="wallpaper" color="#075e54" size={23} style={{ padding: 5 }} /> */}
          </View>
          <View style={styles.detailedcallerDetailsContainer}>
            <Text style={styles.nameText}>Media Visibility</Text>
            <Text style={styles.statusText}>
              Show newly downloaded media in your phone's gallery
            </Text>
          </View>
          <View style={styles.detailediconContainer}>
            {/* <IconAntDesign name="questioncircle" color="grey" size={23} style={{ padding: 5 }} /> */}
            <Switch />
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailediconContainer}>
            {/* <IconAntDesign name="questioncircle" color="grey" size={23} style={{ padding: 5 }} /> */}
          </View>
          <View style={styles.detailedcallerDetailsContainer}>
            <Text style={styles.nameText}>Font size</Text>
            <Text style={styles.statusText}>Medium</Text>
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailediconContainer}>
            {/* <IconAntDesign name="questioncircle" color="grey" size={23} style={{ padding: 5 }} /> */}
          </View>
          <View style={styles.detailedcallerDetailsContainer}>
            <Text style={styles.nameText}>App Language</Text>
            <Text style={styles.statusText}>Phone's language(English)</Text>
          </View>
        </View>
        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailediconContainer}>
            <IconMaterialIcons
              name="backup"
              color="#075e54"
              size={23}
              style={{padding: 5}}
            />
          </View>
          <View style={styles.detailedcallerDetailsContainer}>
            <Text style={styles.nameText}>Chat backup </Text>
          </View>
        </View>
        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailediconContainer}>
            <IconMaterialIcons
              name="history"
              color="#075e54"
              size={23}
              style={{padding: 5}}
            />
          </View>
          <View style={styles.detailedcallerDetailsContainer}>
            <Text style={styles.nameText}>Chat history </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChatSettings;
