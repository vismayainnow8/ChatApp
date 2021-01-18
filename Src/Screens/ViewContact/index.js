import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import {colors} from '../../Assets';
import {Topbar} from '../../Components';
import styles from './styles';

const renderNavBar = () => <Topbar style={styles.topbar} />;

const ViewContact = ({route}) => {
  const {displayName, photoURL,groupName} = route.params;
  const renderContent = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.phoneNumberContainer}>
          <Text style={styles.statusHeader}>About and phone number</Text>
          <Text style={styles.statusText}>Hey , I am using Whatsapp</Text>

          <View style={styles.phoneNumberSecondContainer}>
            <Text style={styles.numberText}>{route.params.phoneNumber}</Text>
            <MaterialCommunityIcons
              name="android-messages"
              size={24}
              color="#128c7e"
              style={{
                paddingLeft: 15,
              }}
              onPress={() => navigation.navigate('ChatScene')}
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
          <Text style={styles.blockText}>Block</Text>
        </View>
      </View>
    );
  };

  return (
    <ReactNativeParallaxHeader
      headerMinHeight={55}
      headerMaxHeight={250}
      extraScrollHeight={20}
      navbarColor={colors.themePrimary.dark}
      title={
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{groupName?groupName:displayName}</Text>
        </View>
      }
      backgroundImage={{uri: photoURL?photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_izSXwEL-JxYjjfIK-eevSIr-9JCBSS_vw&usqp=CAU'}}
      backgroundImageScale={1.2}
      renderNavBar={renderNavBar}
      renderContent={renderContent}
      containerStyle={styles.container}
      contentContainerStyle={styles.contentContainer}
      innerContainerStyle={styles.container}
    />
  );
};

export default ViewContact;
