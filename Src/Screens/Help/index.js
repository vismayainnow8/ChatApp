import React, { useState, useLayoutEffect } from 'react';
import {
        Text,
        ScrollView,
        FlatList, StatusBar,
        Image,
        View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';


const Help = ({ navigation }) => {
        useLayoutEffect(() => {
                navigation.setOptions({
                        headerTitle: "Help",
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
                        <View style={styles.detailedlistItemContainer}>
                                <View style={styles.detailediconContainer}>
                                        <IconAntDesign name="questioncircle" color="#075e54" size={23} style={{ padding: 5 }} />
                                </View>
                                <View style={styles.detailednameContainer}>
                                        <Text style={styles.nameText}>FAQ</Text>
                                </View>
                        </View>

                        <View style={styles.detailedlistItemContainer}>
                                <View style={styles.detailediconContainer}>
                                        <IconMaterialIcons name="group" color="#075e54" size={23} style={{ padding: 5 }} />
                                </View>
                                <View style={styles.detailednameContainer}>
                                        <Text style={styles.nameText}>Contact us</Text>
                                        <Text style={styles.statusText}>Questions? Need help?</Text>
                                </View>
                        </View>
                        <View style={styles.detailedlistItemContainer}>
                                <View style={styles.detailediconContainer}>
                                        <IconAntDesign name="filetext1" color="#075e54" size={23} style={{ padding: 5 }} />
                                </View>
                                <View style={styles.detailednameContainer}>
                                        <Text style={styles.nameText}>Terms and Privacy Policy</Text>
                                </View>
                        </View>
                        <View style={styles.detailedlistItemContainer}>
                                <View style={styles.detailediconContainer}>
                                        <IconMaterialIcons name="info" color="#075e54" size={23} style={{ padding: 5 }} />
                                </View>
                                <View style={styles.detailednameContainer}>
                                        <Text style={styles.nameText}>App info </Text>
                                </View>
                        </View>


                </ScrollView>
        );
};

export default Help;
