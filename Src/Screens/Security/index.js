import React, { useState, useLayoutEffect } from 'react';
import {
        Text,
        ScrollView, StatusBar,
        FlatList,
        Image,
        Switch,
        View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';


const Security = ({ navigation }) => {
        useLayoutEffect(() => {
                navigation.setOptions({
                        headerTitle: "Security",
                        headerStyle: {
                                backgroundColor: '#075e54',
                                // backgroundColor: contactSearchpress ? 'white' : '#075e54',
                                elevation: 0
                        },
                        headerTintColor: 'white',
                })
                // eslint-disable-next-line react-hooks/exhaustive-deps
        })
        return (

                <ScrollView style={styles.mainContainer}>
                        <StatusBar
                                backgroundColor="#075e54"
                                barStyle="light-content"
                        />
                        <View style={styles.contentContainer}>
                                <View style={styles.imageContainer}>
                                        <Image
                                                style={styles.image}
                                                source={{
                                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                                }}
                                        />
                                </View>


                                <View style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>This app secures your conversations with end-to-end encryption.This means your messages ,calls, and status updates stay between you and the people you choose.Not even this apppp can read or listen to them.</Text>
                                                <Text style={styles.blueText}>Learn more</Text>
                                        </View>
                                </View>

                                <Text style={styles.nameText}>Show security notifications</Text>

                                <View style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.statusText}>Turn on this setting to recievenotifications when one of your contact's security code changes</Text>
                                                <Text style={styles.blueText}>Learn more</Text>
                                        </View>
                                        <View style={styles.detailediconContainer}>
                                                <Switch
                                                />
                                        </View>
                                </View>


                        </View>
                </ScrollView>
        );
};

export default Security;
