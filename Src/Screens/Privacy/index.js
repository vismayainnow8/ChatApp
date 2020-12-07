import React, { useState, useLayoutEffect } from 'react';
import {
        Text,
        ScrollView, StatusBar,
        FlatList,
        Image,
        View,
        Switch
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';


const Privacy = ({ navigation }) => {
        useLayoutEffect(() => {
                navigation.setOptions({
                        headerTitle: "Privacy",
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

                                <Text style={styles.headingText}>Who can see my personal info</Text>
                                <Text style={styles.statusText}>If you don't share your Last Seen, you won't be able to see other people's Last Seen</Text>

                                <View style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Lasr seen</Text>
                                                <Text style={styles.statusText}>Nobody</Text>
                                        </View>
                                </View>


                                <View style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Profile photo</Text>
                                                <Text style={styles.statusText}>My contacts</Text>
                                        </View>
                                </View>

                                <View style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>About</Text>
                                                <Text style={styles.statusText}>Everyone</Text>
                                        </View>
                                </View>

                                <View style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Status</Text>
                                                <Text style={styles.statusText}>My contacts</Text>
                                        </View>
                                </View>

                                <View style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Read recieipts</Text>
                                                <Text style={styles.statusText}>If turned off you wont send or recieve Read receipts</Text>
                                        </View>
                                        <View style={styles.detailediconContainer}>
                                                {/* <IconAntDesign name="questioncircle" color="grey" size={23} style={{ padding: 5 }} /> */}
                                                <Switch
                                                />
                                        </View>

                                </View>



                                <View style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Group</Text>
                                                <Text style={styles.statusText}>Everyone</Text>
                                        </View>
                                </View>
                                <View style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Live location</Text>
                                                <Text style={styles.statusText}>NOne</Text>
                                        </View>
                                </View>
                                <View style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Blocked contacts</Text>
                                                <Text style={styles.statusText}>11</Text>
                                        </View>
                                </View>


                        </View>
                </ScrollView>
        );
};

export default Privacy;
