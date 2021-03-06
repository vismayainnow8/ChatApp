import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';

import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu, { MenuItem } from 'react-native-material-menu';

import { colors } from '../Assets';

export const Topbar = ({
  type,
  noavatar,
  title,
  subtitle = null,
  noBack = false,
  moreMenus = [],
  menus = [],
  avatar = null,
  showOverlayComponent = false,
  OverlayComponent = null,
  style = null,
  onPress = () => { },
}) => {
  const { goBack } = useNavigation();
  const menuRef = useRef();

  const onPressMoreMenuItem = (onPress) => {
    onPress();
    menuRef.current.hide();
  };

  const showMenu = () => {
    menuRef.current.show();
  };
  return (
    <View style={[styles.container, style]}>
      {!noBack && (
        <Feather
          name="arrow-left"
          color="white"
          size={25}
          onPress={goBack}
          style={styles.icons}
        />
      )}
      <Pressable style={styles.pressable} onPress={onPress}>

        {noavatar ? null :
          < Avatar avatar={avatar} type={type} />}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </Pressable>
      {menus.map((menu) => (
        <menu.component
          key={menu.icon}
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
            <MenuItem
              key={menu.title}
              onPress={() => onPressMoreMenuItem(menu.onPress)}>
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

const Avatar = ({ avatar, type }) => {
  console.log('avatar', avatar)
  return (
    <View style={styles.avatarContainer}>
      { avatar ? <Image source={{ uri: avatar }} style={styles.avatar} /> : (
        type == 'direct' ? <MaterialIcons name="person" color="white" size={23} /> :
          <MaterialCommunityIcons name="account-group" color="white" size={23} />
      )
      }
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
  pressable: {
    flex: 1,
    flexDirection: 'row',
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
