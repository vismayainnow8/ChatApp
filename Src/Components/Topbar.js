import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Menu, {MenuItem} from 'react-native-material-menu';
import {useRef} from 'react/cjs/react.development';
import {colors} from '../Assets';

export const Topbar = ({
  title,
  subtitle,
  noBack,
  moreMenus = [],
  menus = [],
  avatar = null,
  showOverlayComponent,
  OverlayComponent,
}) => {
  const {goBack} = useNavigation();
  const menuRef = useRef();

  const onPressMoreMenuItem = (onPress) => {
    onPress();
    menuRef.current.hide();
  };

  const showMenu = () => {
    menuRef.current.show();
  };
  return (
    <View style={styles.container}>
      {!noBack && (
        <Feather
          name="arrow-left"
          color="white"
          size={25}
          onPress={goBack}
          style={styles.icons}
        />
      )}
      {avatar !== null && <Avatar avatar={avatar} />}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {menus.map((menu) => (
        <menu.component
          name={menu.icon}
          color="white"
          size={25}
          onPress={menu.onPress}
          style={styles.icons}
        />
      ))}
      {Boolean(moreMenus.length) && (
        <Menu
          ref={menuRef}
          button={
            <Feather
              name="more-vertical"
              color="white"
              size={25}
              onPress={showMenu}
              style={styles.icons}
            />
          }>
          {moreMenus.map((menu) => (
            <MenuItem onPress={() => onPressMoreMenuItem(menu.onPress)}>
              {menu.title}
            </MenuItem>
          ))}
        </Menu>
      )}
      {showOverlayComponent && (
        <View style={styles.overlayComponent}>{OverlayComponent}</View>
      )}
    </View>
  );
};

const Avatar = ({avatar}) => {
  return (
    <View style={styles.avatarContainer}>
      {avatar == '' ? (
        <MaterialIcons name="person" color="white" size={23} />
      ) : (
        <Image source={{uri: avatar}} style={styles.avatar} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: colors.themePrimary.dark,
    flexDirection: 'row',
  },
  overlayComponent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  icons: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    padding: 0,
    color: 'white',
  },
  subtitle: {
    color: 'white',
    padding: 0,
    fontSize: 11,
  },
  avatarContainer: {
    justifyContent: 'center',
    borderRadius: 30,
    width: 39,
    height: 39,
    marginVertical: 8,
    backgroundColor: '#D9E3E2',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 30,
    width: 39,
    height: 39,
  },
});
