import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../Assets';
import { Topbar } from '../../Components';
import styles from './styles';

const ViewContact = ({ route, navigation }) => {
  const { displayName, photoURL, user, groupName, image, groupIcon, type } = route.params;

  const renderNavBar = () => (
    <TouchableOpacity style={styles.topbar} onPress={() => navigation.pop()}>
      <MaterialCommunityIcons name="arrow-left" color="white" size={33} />
    </TouchableOpacity>
  );

  const renderContent = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.phoneNumberContainer}>
          {
            user?.phoneNumber &&
            <View>
              <Text style={styles.statusHeader}>About and phone number</Text>
              <View style={styles.phoneNumberSecondContainer}>
                {<Text style={styles.numberText}>{user?.phoneNumber}</Text>}
                <MaterialCommunityIcons name="android-messages" size={24} color="#128c7e" style={{ paddingLeft: 15, }}
                  onPress={() => navigation.navigate('ChatScene')} />
              </View>
            </View>
          }
          {
            !user?.phoneNumber &&
            <View>
              <Text style={styles.statusHeader}>Participants</Text>
              {user.map((item) =>
                <TouchableOpacity style={styles.phoneNumberGroupContainer}
                // onPress={() => navigation.navigate('ChatScene', item)}
                // onPress={() => console.log('ChatScene', item)}

                >
                  {item.photoURL ? <Image source={{ uri: item.photoURL }} style={styles.avatar} /> :
                    <View style={styles.avatarContainer}>
                      <MaterialIcons name="person" color="white" size={23} />
                    </View>}
                  <Text >{item.displayName ?? item.phoneNumber}</Text>
                </TouchableOpacity>
              )}
            </View>

          }
        </View>
      </View>
    );
  };


  return (
    <ReactNativeParallaxHeader
      headerMinHeight={55}
      headerMaxHeight={350}
      extraScrollHeight={20}
      navbarColor={colors.themePrimary.dark}
      title=
      {
        <View style={styles.titleContainer}>
          {groupName && <Text style={styles.titleStyle}>{groupName}</Text>}
          {user?.displayName && <Text style={styles.titleStyle}>{user?.displayName}</Text>}
        </View>
      }

      backgroundImage={
        groupIcon == null && user?.photoURL == null ?
          (type == 'direct' ? (require('../../Assets/user.png')) : (require('../../Assets/groups.png')))
          :
          { uri: groupIcon ?? user?.photoURL }
      }


      backgroundImageScale={1.2}
      renderNavBar={renderNavBar}
      renderContent={renderContent}
      containerStyle={styles.container}
      contentContainerStyle={styles.contentContainer}
      innerContainerStyle={styles.innerContainer}
    />
  );
};

export default ViewContact;
