import React, { useState, useLayoutEffect } from 'react';
import {
        Text,
        ScrollView,
        FlatList, StatusBar,
        Image,
        View,
        TouchableOpacity
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';


const Settings = ({ navigation }) => {
        useLayoutEffect(() => {
                navigation.setOptions({
                        headerTitle: "Settings",
                        headerStyle: {
                                backgroundColor: '#075e54',
                                // backgroundColor: contactSearchpress ? 'white' : '#075e54',
                                elevation: 0
                        },
                        headerTintColor: 'white',

                })
                // eslint-disable-next-line react-hooks/exhaustive-deps
        })
        const [] = useState(false);


        const Item = ({ image, first_name, message }) => (
                <View style={styles.listItemContainer}>
                        <View style={styles.iconContainer}>
                                <Image
                                        source={{ uri: image }}
                                        style={styles.initStyle}
                                        resizeMode="contain"
                                />
                        </View>
                        <View style={styles.callerDetailsContainer}>
                                <View style={styles.callerDetailsContainerWrap}>
                                        <View style={styles.nameContainer}>
                                                <Text>{first_name}</Text>
                                                <View style={styles.dateContainer}>
                                                        <Text numberOfLines={1} style={{ fontWeight: '400', color: '#666', fontSize: 12 }}>
                                                                {message}
                                                        </Text>
                                                </View>
                                        </View>

                                </View>
                        </View>
                </View>
        );


        return (
                // <View>

                <ScrollView style={styles.mainContainer}>
                        <StatusBar
                                backgroundColor="#075e54"
                        // barStyle="light-content"
                        />
                        <View style={styles.contentContainer}>


                                <View style={styles.listItemContainer}>
                                        <View style={styles.iconContainer}>
                                                <Image
                                                        style={styles.profileImage}
                                                        source={{
                                                                uri: 'https://randomuser.me/api/portraits/men/18.jpg',
                                                        }}
                                                />

                                        </View>
                                        <View style={styles.callerDetailsContainer}>
                                                <View style={styles.callerDetailsContainerWrap}>
                                                        <View style={styles.nameContainer}>
                                                                <Text style={styles.nameBoldText}>Vismaya Haridas</Text>
                                                                <Text style={styles.statusText}>Be happy and make others happier</Text>
                                                        </View>
                                                </View>
                                        </View>
                                </View>

                                <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                <IconFontisto name="key" color="#075e54" size={23} style={{ padding: 5 }} />
                                        </View>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Account</Text>
                                                <Text style={styles.statusText}>Privacy,security, change number</Text>
                                        </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate('ChatSettings')} style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                <IconMaterialIcons name="chat" color="#075e54" size={23} style={{ padding: 5 }} />
                                        </View>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Chats</Text>
                                                <Text style={styles.statusText}>Theme, wallpaper,chat history</Text>
                                        </View>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                <IconMaterialIcons name="notifications" color="#075e54" size={23} style={{ padding: 5 }} />
                                        </View>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Notification</Text>
                                                <Text style={styles.statusText}>Message, group & call tones</Text>
                                        </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate('DataStorageUsage')} style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                <IconMaterialIcons name="data-usage" color="#075e54" size={23} style={{ padding: 5 }} />
                                        </View>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Data and storage usage</Text>
                                                <Text style={styles.statusText}>Network usage, auto-download</Text>
                                        </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate('Help')} style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                <IconAntDesign name="questioncircle" color="#075e54" size={23} style={{ padding: 5 }} />
                                        </View>
                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Help</Text>
                                                <Text style={styles.statusText}>FAQ, contact us,privacy policy</Text>
                                        </View>
                                        {/* </View> */}
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => alert('invite via')} style={styles.detailedlistItemContainer}>
                                        <View style={styles.detailediconContainer}>
                                                <IconMaterialIcons name="group" color="#075e54" size={23} style={{ padding: 5 }} />
                                        </View>

                                        <View style={styles.detailednameContainer}>
                                                <Text style={styles.nameText}>Invite a friend</Text>
                                        </View>


                                </TouchableOpacity>

                        </View>
                </ScrollView>
                // </View>
        );
};

export default Settings;
