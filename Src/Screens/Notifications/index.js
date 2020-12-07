import React, {useState, useLayoutEffect} from 'react';
import {
  Text,
  ScrollView,
  StatusBar,
  FlatList,
  Image,
  Switch,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const Notifications = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Notifications',
      headerStyle: {
        backgroundColor: '#075e54',
        // backgroundColor: contactSearchpress ? 'white' : '#075e54',
        elevation: 0,
      },
      headerTintColor: 'white',
      headerRight: () => {
        return (
          <IconEntypo
            onPress={() => alert('search')}
            name="dots-three-vertical"
            size={24}
            color="white"
            style={{paddingRight: 10}}
          />
        );
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <View style={styles.contentContainer}>
        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Conversation tones</Text>
            <Text style={styles.statusText}>
              Play sounds for incoming and outgoing messages
            </Text>
          </View>
          <View style={styles.detailediconContainer}>
            {/* <IconAntDesign name="questioncircle" color="grey" size={23} style={{ padding: 5 }} /> */}
            <Switch />
          </View>
        </View>

        <Text style={styles.headingText}>Messages</Text>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Notifications tones</Text>
            <Text style={styles.statusText}>
              Default ringtone (lava doorbell)
            </Text>
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Vibrate</Text>
            <Text style={styles.statusText}>Default</Text>
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Popup notification</Text>
            <Text style={styles.statusText}>No popup</Text>
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Light</Text>
            <Text style={styles.statusText}>White</Text>
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Use high priority notification</Text>
            <Text style={styles.statusText}>
              Show previews of notification at the top of the screen
            </Text>
          </View>
          <View style={styles.detailediconContainer}>
            {/* <IconAntDesign name="questioncircle" color="grey" size={23} style={{ padding: 5 }} /> */}
            <Switch />
          </View>
        </View>

        <Text style={styles.headingText}>Groups</Text>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Notifications tones</Text>
            <Text style={styles.statusText}>
              Default ringtone (lava doorbell)
            </Text>
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Vibrate</Text>
            <Text style={styles.statusText}>Default</Text>
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Popup notification</Text>
            <Text style={styles.statusText}>No popup</Text>
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Light</Text>
            <Text style={styles.statusText}>White</Text>
          </View>
        </View>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Use high priority notification</Text>
            <Text style={styles.statusText}>
              Show previews of notification at the top of the screen
            </Text>
          </View>
          <View style={styles.detailediconContainer}>
            {/* <IconAntDesign name="questioncircle" color="grey" size={23} style={{ padding: 5 }} /> */}
            <Switch />
          </View>
        </View>

        <Text style={styles.headingText}>Calls</Text>

        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Ringtone </Text>
            <Text style={styles.statusText}>Default ringtone(playa)</Text>
          </View>
        </View>
        <View style={styles.detailedlistItemContainer}>
          <View style={styles.detailednameContainer}>
            <Text style={styles.nameText}>Vibrate </Text>
            <Text style={styles.statusText}>Default </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Notifications;
