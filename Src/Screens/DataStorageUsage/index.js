import React, {useState, useLayoutEffect} from 'react';
import {
  Text,
  ScrollView,
  FlatList,
  StatusBar,
  Image,
  View,
  Switch,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const DataStorageUsage = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Data and storage usage',
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
        <Text style={styles.headingText}>Usage</Text>

        <View style={styles.detailedlistItemContainer}>
          {/* <View style={styles.detailedcallerDetailsContainer}> */}
          {/* <View style={styles.callerDetailsContainerWrap}> */}
          {/* <View style={styles.detailednameContainer}> */}
          <Text style={styles.nameText}>Network usage</Text>
          <Text style={styles.statusText}>203MB sent . 767MB recieved</Text>
          {/* </View> */}

          {/* </View> */}
          {/* </View> */}
        </View>

        <View style={styles.detailedlistItemContainer}>
          {/* <View style={styles.detailedcallerDetailsContainer}> */}
          {/* <View style={styles.callerDetailsContainerWrap}> */}
          {/* <View style={styles.detailednameContainer}> */}
          <Text style={styles.nameText}>Storage usage</Text>
          <Text style={styles.statusText}>1GB</Text>
          {/* </View> */}

          {/* </View> */}
          {/* </View> */}
        </View>

        <Text style={styles.headingText}>Media auto-download</Text>
        <Text style={styles.statusText}>
          Voice messages are always auto-downloaded for best communication
          experience
        </Text>

        <View style={styles.detailedlistItemContainer}>
          {/* <View style={styles.detailedcallerDetailsContainer}> */}
          {/* <View style={styles.callerDetailsContainerWrap}> */}
          {/* <View style={styles.detailednameContainer}> */}
          <Text style={styles.nameText}>When using mobile data</Text>
          <Text style={styles.statusText}>No media</Text>
          {/* </View> */}

          {/* </View> */}
          {/* </View> */}
        </View>

        <View style={styles.detailedlistItemContainer}>
          {/* <View style={styles.detailedcallerDetailsContainer}> */}
          {/* <View style={styles.callerDetailsContainerWrap}> */}
          {/* <View style={styles.detailednameContainer}> */}
          <Text style={styles.nameText}>When connected on Wi-Fi</Text>
          <Text style={styles.statusText}>All media</Text>
          {/* </View> */}

          {/* </View> */}
          {/* </View> */}
        </View>

        <View style={styles.detailedlistItemContainer}>
          {/* <View style={styles.detailedcallerDetailsContainer}> */}
          {/* <View style={styles.callerDetailsContainerWrap}> */}
          {/* <View style={styles.detailednameContainer}> */}
          <Text style={styles.nameText}>When roaming</Text>
          <Text style={styles.statusText}>No media</Text>
          {/* </View> */}

          {/* </View> */}
          {/* </View> */}
        </View>

        <Text style={styles.headingText}>Call settings</Text>

        <View
          style={[styles.detailedlistItemContainer, {flexDirection: 'row'}]}>
          <View style={styles.detailedcallerDetailsContainer}>
            <View style={styles.callerDetailsContainerWrap}>
              <View style={styles.detailednameContainer}>
                <Text style={styles.nameText}>Low data usage</Text>
                <Text style={styles.statusText}>
                  Reduce the data used in the call
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.detailediconContainer}>
            {/* <IconAntDesign name="questioncircle" color="grey" size={23} style={{ padding: 5 }} /> */}
            <Switch />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DataStorageUsage;
