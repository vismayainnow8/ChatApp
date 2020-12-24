import React,{useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import { consts } from '../../Assets/Consts';
 

 

 

 

 
const ViewContact = ({ navigation, route }) => {
  const renderContent = () => {
    return (
      <View style={styles.contentContainer}>
         <View style={styles.media}>
          <Text  style={styles.mediaText}>Media and docs</Text>
          <Image
                style={styles.mediaImage}
                source={require('../../Assets/chatBackground.png')}
              />
        </View>
        <View style={styles.notificationContainer}>
          <TouchableOpacity style={styles.muteContainer}>
          <Text>Mute Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.customContainer}>
          <Text>Custom Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mediaContainer}>
          <Text>Media Visibility</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.phoneNumberContainer}>
          <Text style={styles.statusHeader}>About and phone number</Text>
          <Text  style={styles.statusText}>Hey , I am using Whatsapp</Text>
  
        <View style={styles.phoneNumberSecondContainer}>
          
          <Text  style={styles.numberText}>{route.params.phoneNumber}</Text>
          <MaterialCommunityIcons
          name="android-messages"
          size={24}
          color="#128c7e"
          style={{
            paddingLeft: 15,
              }}
              onPress={()=>navigation.navigate('ChatScene')}
            />
            
        </View>
        </View>
        <View style={styles.blockContainer}>
          
          <MaterialCommunityIcons
          name="android-messages"
          size={20}
          color="red"
          style={{
            paddingRight: 15,
          }}
            />
          <Text  style={styles.blockText}>Block</Text>
            
        </View>
      </View>
    );
  };
  const title = () => {
    return (
      <View style={styles.profileImageContainer}>
        <Text style={styles.nameText}>{route.params.displayName ?? route.params.phoneNumber}</Text>
      </View>
    );
  };
  const renderNavBar = () => (
    <View style={styles.navContainer}>
      <View style={styles.statusBar} />
      <View style={styles.navBar}>
      <AntDesign
            onPress={() => navigation.pop()}
            name="arrowleft"
            size={24}
            color="#FFF"
          />
        <Entypo
          name="dots-three-vertical"
          size={24}
          color="#FFF"
          style={{
            paddingLeft: 15,
          }}
        />
      </View>
    </View>
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <StatusBar backgroundColor="lightgrey"  />
      <ReactNativeParallaxHeader
        headerMinHeight={50}
        headerMaxHeight={consts.ScreenHeight/1.75}
        // extraScrollHeight={400}
        headerTitleStyle={{justifyContent:"flex-end"}}
        navbarColor="grey"
        titleStyle={styles.titleStyle}
        title={title()}
        backgroundImage={{uri:route.params.avatar}}
        backgroundImageScale={1.2}
        renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
          onScrollEndDrag: () => console.log('onScrollEndDrag'),
        }}
      />
    </>
  );
};
 

 
export default ViewContact;