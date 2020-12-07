import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors, consts} from '../Assets';

export const EmptyListComponent = (props) => {
  return (
    <View style={styles.noItemsContainer}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noItemsContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: consts.textSizes(12),
  },
});
