import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const SmallButton = (props) => {
  const icon = props.iconName ? (
    <Icon
      style={[styles.icon, props.iconStyle]}
      name={props.iconName}
      size={props.iconSize}
      color={props.iconColor}
    />
  ) : null;
  const label = props.title ? (
    <Text numberOfLines={1} style={props.labelStyle}>
      {props.title}
    </Text>
  ) : null;
  if (props.loading) {
    return (
      <View style={[styles.container, props.style]}>
        <ActivityIndicator color="white" />
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={[styles.container, props.style]}
        onPress={() => props.onPress()}>
        {label}
        {/* {icon} */}
      </TouchableOpacity>
    );
  }
};

SmallButton.defaultProps = {
  iconColor: 'white',
  iconSize: 20,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25d366',
    paddingHorizontal: 10,
    width: '30%',
    paddingVertical: 10,
    alignSelf: 'center',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
});
