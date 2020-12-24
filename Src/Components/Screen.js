import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {colors} from '../Assets';

export const Screen = ({children, style}) => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={headerHeight}
        behavior={Platform.OS === 'ios' ? 'padding' : 'null'}>
        <StatusBar backgroundColor="#075e54" barStyle="light-content" />
        <View style={[styles.container, style]}>{children}</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themePrimary.dark,
  },
});
