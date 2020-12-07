import React from 'react';
// import { connect, useDispatch } from 'react-redux';
import { View, StyleSheet, Keyboard, Text, AsyncStorage, Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../Assets';
// import { Navigation } from 'react-native-navigation';
// import { LOGOUT } from '../StateManagement/Actions/types';
// import { goToAuth } from '../Navigation';
// import { Store } from '../StateManagement';
import { Search } from './Search';
// import { logoutApi } from '../Services/entry'

export const Topbar = ({
        title, subtitle, noBack, children, componentId, onSearch, closingSearch, ...props
}) => {
        const onBack = () => {
                Keyboard.dismiss();
                // if (Platform.OS == 'ios') {
                //         Navigation.popToRoot(componentId);

                // }
                // else {
                //         Navigation.pop(componentId)
                // }
        }
        const logout = async () => {
                Keyboard.dismiss();
                // logoutApi().then(() => {
                //         Store.dispatch({ type: LOGOUT })
                //         goToAuth()
                // })
                await AsyncStorage.clear();

        }
        const search = onSearch ?
                <Search onSearch={onSearch} closingSearch={closingSearch} initialSearchValue={props.initialSearchValue} /> :
                null;
        const padder = !onSearch && !title ?
                <View style={styles.padder} /> :
                null;

        return (
                <View style={styles.container}>
                        {/* <View style={{ justifyContent: "center" }}> */}
                        <Text style={styles.title}>
                                {title}
                        </Text>
                        {/* </View> */}
                        {search}
                        {padder}
                        {!!subtitle && (
                                <Text style={styles.subtitle}>
                                        {subtitle}
                                </Text>
                        )}


                        {!noBack && (
                                <Feather
                                        name="arrow-left"
                                        color='white'
                                        size={20}
                                        onPress={onBack}
                                        style={styles.backIcon}
                                />
                        )}
                        <View style={styles.rightBtnContainer}>

                                <Feather
                                        name="power"
                                        color='white'
                                        size={20}
                                        onPress={logout}
                                        style={styles.rightBtn}
                                />
                        </View>
                        {children}
                </View>
        );
};

const styles = StyleSheet.create({
        container: {
                backgroundColor: '#1ab394',
                // backgroundColor: 'pink',
                paddingVertical: 10,
                paddingBottom: 15,
                zIndex: 20
        },
        title: {
                lineHeight: 20,
                fontSize: 16,
                fontWeight: 'bold',
                alignSelf: 'center',
                // paddingVertical: 10,
                color: "white"
        },
        subtitle: {
                color: "white",
                lineHeight: 17,
                fontSize: 11,
                alignSelf: 'center',
                marginTop: -10,
        },
        backIcon: {
                position: 'absolute',
                paddingHorizontal: 20,
                paddingVertical: 10,
        },
        rightBtnContainer: {
                position: 'absolute',
                right: 0,
        },
        rightBtn: {
                paddingHorizontal: 20,
                paddingVertical: 10,

        }
});
