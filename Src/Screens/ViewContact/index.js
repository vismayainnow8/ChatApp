import React, { useEffect, useState } from 'react';
import { View, Alert, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import firestore from '@react-native-firebase/firestore';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import { colors } from '../../Assets';
import { Topbar } from '../../Components';
import styles from './styles';

const ViewContact = ({ route, navigation }) => {
  const {
    displayName,
    photoURL,
    user,
    groupName,
    image,
    groupIcon,
    chatId,
    type,
  } = route.params;
  const [users, setUsers] = useState(user);
  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState();

  useEffect(() => {
    if (type == 'indirect') {
      let usersIds = user.map(item => item.uid);
      const foundInGroup = usersIds.some(el => el === auth().currentUser._user.uid);
      setExist(foundInGroup)
      console.log('foundInGroup', foundInGroup)
    }
  });
  const renderNavBar = () => (
    <TouchableOpacity style={styles.topbar} onPress={() => navigation.pop()}>
      <MaterialCommunityIcons name="arrow-left" color="white" size={33} />
    </TouchableOpacity>
  );

  const onExitPress = () => {
    Alert.alert('', 'Are  you sure to exit group ?', [
      { text: 'CANCEL', onPress: () => console.log('Cancel Pressed') },
      { text: 'OK', onPress: () => exitGroup() },
    ]);
  }
  const exitGroup = () => {
    setLoading(true)
    console.log('user', user)

    var object = user.find(x => x.uid === auth().currentUser._user.uid);
    console.log('object', object)
    var currentUserIndex = user.indexOf(object);
    console.log('currentUserIndex', currentUserIndex)

    user.splice(currentUserIndex, 1);
    console.log('user', user)

    firestore().collection('Group').doc(chatId)
      .update({
        details: user
      }).then(() => {
        console.log('yes', yes)

        setLoading(false)
      })
  }
  const renderContent = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.phoneNumberContainer}>
          {!user?.phoneNumber && !exist && (<View>
            <Text style={styles.numberText}>You are no longer a participant in this group</Text>
          </View>)}
          {user?.phoneNumber && (
            <View>
              <Text style={styles.statusHeader}>About and phone number</Text>
              <View style={styles.phoneNumberSecondContainer}>
                {<Text style={styles.numberText}>{user?.phoneNumber}</Text>}
                <MaterialCommunityIcons
                  name="android-messages"
                  size={24}
                  color="#128c7e"
                  style={{ paddingLeft: 15 }}
                  onPress={() => navigation.navigate('ChatScene')}
                />
              </View>
            </View>
          )}
          {!user?.phoneNumber && (
            <View>
              <Text style={styles.statusHeader}>Participants</Text>
              {user.map((item) => (
                <TouchableOpacity
                  style={styles.phoneNumberGroupContainer}
                // onPress={() => navigation.navigate('ChatScene', item)}
                // onPress={() => console.log('ChatScene', item)}
                >
                  {item.photoURL ? (
                    <Image
                      source={{ uri: item.photoURL }}
                      style={styles.avatar}
                    />
                  ) : (
                      <View style={styles.avatarContainer}>
                        <MaterialIcons name="person" color="white" size={23} />
                      </View>
                    )}
                  <Text>{item.displayName ?? item.phoneNumber}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        {user?.phoneNumber && (
          <>
            <TouchableOpacity style={styles.exitGroupView}>
              <Image
                source={require('../../Assets/block.png')}
                style={styles.image}
              />
              <Text>Block</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.reportGroupView}>
              <Image
                source={require('../../Assets/report.png')}
                style={styles.image}
              />
              <Text>Report contact</Text>
            </TouchableOpacity> */}
          </>
        )}
        {!user?.phoneNumber && exist && (
          <>
            <TouchableOpacity style={styles.exitGroupView} onPress={() => onExitPress()}>
              <Image
                source={require('../../Assets/exit.png')}
                style={styles.image}
              />
              <Text>Exit Group</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.reportGroupView}>
              <Image
                source={require('../../Assets/report.png')}
                style={styles.image}
              />
              <Text>Report Group</Text>
            </TouchableOpacity> */}
          </>
        )}
      </View>
    );
  };

  return (
    <ReactNativeParallaxHeader
      headerMinHeight={55}
      headerMaxHeight={350}
      extraScrollHeight={20}
      navbarColor={colors.themePrimary.dark}
      title={
        <View style={styles.titleContainer}>
          {groupName && <Text style={styles.titleStyle}>{groupName}</Text>}
          {user?.displayName && (
            <Text style={styles.titleStyle}>{user?.displayName}</Text>
          )}
        </View>
      }
      backgroundImage={
        groupIcon == null && user?.photoURL == null
          ? type == 'direct'
            ? require('../../Assets/user.png')
            : require('../../Assets/groups.png')
          : { uri: groupIcon ?? user?.photoURL }
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
