import React, { useState, useLayoutEffect } from 'react';
import {
        Text,
        ScrollView,
        FlatList, StatusBar,
        Image,
        View,
        TextInput
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';


const ChatSettings = ({ navigation }) => {
        useLayoutEffect(() => {
                navigation.setOptions({
                        headerTitle: "Delete Account",
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
                                <View style={styles.detaildlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                <IconAntDesign name="questioncircle" color="red" size={23} style={{ padding: 5 }} />
                                        </View>
                                        <View style={styles.detailedcallerDetailsContainer}>
                                                <View style={styles.callerDetailsContainerWrap}>
                                                        <View style={styles.detailednameContainer}>
                                                                <Text style={styles.nameText}>Deleting your account will :</Text>
                                                        </View>

                                                </View>
                                        </View>

                                </View>

                                <View style={styles.detaildlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                {/* <IconAntDesign name="questioncircle" color="red" size={23} style={{ padding: 5 }} /> */}
                                        </View>
                                        <View style={styles.detailedcallerDetailsContainer}>
                                                <View style={styles.callerDetailsContainerWrap}>
                                                        <View style={styles.detailednameContainer}>
                                                                <Text style={styles.nameText}>Deleting your account from WhatsApp </Text>
                                                        </View>

                                                </View>
                                        </View>

                                </View>
                                <View style={styles.detaildlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                {/* <IconAntDesign name="questioncircle" color="red" size={23} style={{ padding: 5 }} /> */}
                                        </View>
                                        <View style={styles.detailedcallerDetailsContainer}>
                                                <View style={styles.callerDetailsContainerWrap}>
                                                        <View style={styles.detailednameContainer}>
                                                                <Text style={styles.nameText}>Erase your message history</Text>
                                                        </View>

                                                </View>
                                        </View>

                                </View>
                                <View style={styles.detaildlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                {/* <IconAntDesign name="questioncircle" color="red" size={23} style={{ padding: 5 }} /> */}
                                        </View>
                                        <View style={styles.detailedcallerDetailsContainer}>
                                                <View style={styles.callerDetailsContainerWrap}>
                                                        <View style={styles.detailednameContainer}>
                                                                <Text style={styles.nameText}>Delete you from all of your WhatsApp groups</Text>
                                                        </View>

                                                </View>
                                        </View>

                                </View>
                                <View style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                <IconAntDesign name="questioncircle" color="red" size={23} style={{ padding: 5 }} />
                                        </View>
                                        <View style={styles.detailedcallerDetailsContainer}>
                                                <View style={styles.callerDetailsContainerWrap}>
                                                        <View style={styles.detailednameContainer}>
                                                                <Text style={styles.nameText}>Change number instead?</Text>
                                                        </View>

                                                </View>
                                        </View>

                                </View>

                                <View style={styles.detaildlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                {/* <IconAntDesign name="questioncircle" color="red" size={23} style={{ padding: 5 }} /> */}
                                        </View>
                                        <View style={styles.detailedcallerDetailsContainer}>
                                                <View style={styles.callerDetailsContainerWrap}>
                                                        <View style={styles.detailednameContainer}>
                                                                <Text style={styles.nameText}>To delete your account,confirm your country code and enter your phone number</Text>
                                                                <Text style={styles.statusText}>Country</Text>
                                                                <Text style={styles.statusText}>Phone</Text>

                                                        </View>

                                                </View>
                                        </View>

                                </View>




                        </View>
                </ScrollView>
        );
};

export default ChatSettings;
