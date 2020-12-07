import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Profile = () => {
  return (
    <View style={styles.profileContainer}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.editNameContainer}>
          <IconFontAwesome5
            name="user-alt"
            size={12}
            color="#075e54"
            style={styles.icon}
          />
          <View style={styles.itemContainer}>
            <Text style={styles.heading}>Name</Text>
            <Text style={styles.text}>Vismaya Haridas</Text>
            <Text style={styles.heading}>
              This is not your username or pin.This name will be visible to your
              WhatsApp contacts{' '}
            </Text>
          </View>
          <IconMaterialIcons
            name="edit"
            size={12}
            color="#075e54"
            style={styles.icon}
          />
        </View>
        <View style={styles.editNameContainer}>
          <IconIonicons
            name="information-circle-sharp"
            size={12}
            color="#075e54"
            style={styles.icon}
          />
          <View style={styles.itemContainer}>
            <Text style={styles.heading}>About</Text>
            <Text style={styles.text}>
              Be happy and make the world the happiest
            </Text>
          </View>
          <IconMaterialIcons
            name="edit"
            size={12}
            color="#075e54"
            style={styles.icon}
          />
        </View>
        <View style={styles.editNameContainer}>
          <IconFontAwesome5
            name="phone-alt"
            size={12}
            color="#075e54"
            style={styles.icon}
          />
          <View style={styles.itemContainer}>
            <Text style={styles.heading}>Phone</Text>
            <Text style={styles.text}>12345678910</Text>
          </View>
          <IconMaterialIcons
            name="edit"
            size={12}
            color="#075e54"
            style={styles.icon}
          />
        </View>

        <View style={styles.cameraIconContainer}>
          <IconFontAwesome5 name="camera" size={25} color="white" />
        </View>
      </View>
    </View>
  );
};
export default Profile;
