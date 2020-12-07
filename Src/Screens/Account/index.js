import React, {useState, useLayoutEffect} from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Account = ({navigation}) => {
  // const [] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Account',
      headerStyle: {
        backgroundColor: '#075e54',
        elevation: 0,
      },
      headerTintColor: 'white',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <ScrollView style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Privacy')}
        style={styles.detailedlistItemContainer}>
        <View style={styles.detailediconContainer}>
          <IconMaterialIcons
            name="lock"
            color="#075e54"
            size={23}
            style={{padding: 5}}
          />
        </View>
        <View style={styles.detailedcallerDetailsContainer}>
          <Text style={styles.nameText}>Privacy</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Security')}
        style={styles.detailedlistItemContainer}>
        <View style={styles.detailediconContainer}>
          <IconMaterialIcons
            name="security"
            color="#075e54"
            size={23}
            style={{padding: 5}}
          />
        </View>
        <View style={styles.detailedcallerDetailsContainer}>
          <Text style={styles.nameText}>Security</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('TwoStepVerification')}
        style={styles.detailedlistItemContainer}>
        <View style={styles.detailediconContainer}>
          <IconMaterialIcons
            name="confirmation-num"
            color="#075e54"
            size={23}
            style={{padding: 5}}
          />
        </View>
        <View style={styles.detailedcallerDetailsContainer}>
          <Text style={styles.nameText}>Two-step verification</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ChangeNumber')}
        style={styles.detailedlistItemContainer}>
        <View style={styles.detailediconContainer}>
          <IconMaterialIcons
            name="send-to-mobile"
            color="#075e54"
            size={23}
            style={{padding: 5}}
          />
        </View>
        <View style={styles.detailedcallerDetailsContainer}>
          <Text style={styles.nameText}>Change number</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('RequestAccountInfo')}
        style={styles.detailedlistItemContainer}>
        <View style={styles.detailediconContainer}>
          <IconAntDesign
            name="filetext1"
            color="#075e54"
            size={23}
            style={{padding: 5}}
          />
        </View>
        <View style={styles.detailedcallerDetailsContainer}>
          <Text style={styles.nameText}>Request account info</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('DeleteAccount')}
        style={styles.detailedlistItemContainer}>
        <View style={styles.detailediconContainer}>
          <IconAntDesign
            name="delete"
            color="#075e54"
            size={23}
            style={{padding: 5}}
          />
        </View>
        <View style={styles.detailedcallerDetailsContainer}>
          <Text style={styles.nameText}>Delete my account</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Account;
