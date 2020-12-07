import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
        Text,
        ScrollView,
        FlatList, Platform, PermissionsAndroid, SafeAreaView, StatusBar,
        Image,
        View,
} from 'react-native';
import Contact from 'react-native-contacts';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Contacts = ({ navigation }) => {
        const [] = useState(false);
        let [contacts, setContacts] = useState([]);
        const [selectedItem, setSelectedItem] = useState(null);

        useEffect(() => {
                if (Platform.OS === 'android') {
                        PermissionsAndroid.request(
                                PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                                title: 'Contacts',
                                message: 'This app would like to view your contacts.',
                        }).then(() => {
                                loadContacts();
                                console.log("useffected worked")
                        }
                        )
                } else {
                        loadContacts();
                        console.log("useffected failed")

                }
        }, []);

        const loadContacts = () => {
                Contact.getAll().then(contacts => {
                        contacts.sort(function (a, b) {
                                if (a.displayName < b.displayName) { return -1; }
                                if (a.displayName > b.displayName) { return 1; }
                                return 0;
                        })
                        setContacts(contacts)
                        console.log('contacts', contacts)
                })

        };
        useLayoutEffect(() => {
                navigation.setOptions({
                        headerTitle: " Select Contact",

                        headerStyle: {
                                backgroundColor: '#075e54',
                                // backgroundColor: contactSearchpress ? 'white' : '#075e54',
                                elevation: 0
                        },
                        headerTintColor: 'white',
                })
                // eslint-disable-next-line react-hooks/exhaustive-deps
        })

        const onPressed = (selectedItem) => {
                setSelectedItem(selectedItem)
                console.log("selectedItem", selectedItem)
                navigation.navigate('ChatScene', { title: selectedItem })
        }

        const Item = ({ image, displayName, item, message }) => (
                <TouchableOpacity onPress={() => onPressed(item.displayName)} style={styles.listItemContainer}>

                        <View style={styles.iconContainerperson}>
                                {image ? <Image
                                        source={{ uri: image }}
                                        style={styles.initStyle}
                                        resizeMode="contain"
                                /> :
                                        <IconMaterialIcons name="person" color="white" size={23} />
                                }
                        </View>
                        <View style={styles.nameContainer}>
                                <Text>{displayName}</Text>
                                <View style={styles.dateContainer}>
                                        <Text numberOfLines={1} style={{ fontWeight: '400', color: '#666', fontSize: 12 }}>
                                                my status..
                                        </Text>
                                </View>
                        </View>



                </TouchableOpacity>
        );
        function renderItem({ item, index }) {
                const isSelected = (selectedItem === item.id);

                return (
                        <Item
                                item={item}
                                image={item.image}
                                displayName={item.displayName}
                                missed={item.missed}
                                time={item.time}
                                date={item.date}
                                message={item.message}
                                number={item.number}

                        />
                );
        };

        return (
                <SafeAreaView style={{ flex: 1 }}>
                        <StatusBar
                                backgroundColor="#075e54"
                                barStyle="light-content"
                        />
                        <ScrollView style={styles.mainContainer}>
                                <View style={styles.contentContainer}>

                                        <View style={styles.listItemContainer}>
                                                <View style={styles.iconContainer}>
                                                        <IconMaterialIcons name="group" color="white" size={23} style={styles.specialIcon} />
                                                </View>
                                                <View style={styles.nameContainer}>
                                                        <Text>New Group</Text>
                                                        <View style={styles.dateContainer}>
                                                                <Text numberOfLines={1} style={{ fontWeight: '400', color: '#666', fontSize: 12 }}>
                                                                </Text>
                                                        </View>
                                                </View>
                                        </View>
                                        <View style={styles.listItemContainer}>
                                                <View style={styles.iconContainer}>
                                                        <IconMaterialIcons name="group" color="white" size={23} style={styles.specialIcon} />
                                                </View>
                                                <View style={styles.nameContainer}>
                                                        <Text>New Contact</Text>
                                                        <View style={styles.dateContainer}>
                                                                <Text numberOfLines={1} style={{ fontWeight: '400', color: '#666', fontSize: 12 }}>
                                                                </Text>
                                                        </View>
                                                </View>
                                        </View>


                                        <FlatList
                                                data={contacts}
                                                renderItem={renderItem}
                                        />
                                        <View style={styles.listItemContainer}>
                                                <View style={styles.iconContainerWoColor}>
                                                        <Icon name="share" color="grey" size={23} style={{ padding: 5 }} />

                                                </View>
                                                <View style={styles.callerDetailsContainer}>
                                                        <View style={styles.callerDetailsContainerWrap}>
                                                                <View style={styles.nameContainer}>
                                                                        <Text>Invite friends</Text>
                                                                </View>

                                                        </View>
                                                </View>
                                        </View>
                                        <View style={styles.listItemContainer}>
                                                <View style={styles.iconContainerWoColor}>
                                                        <IconAntDesign name="questioncircle" color="grey" size={23} style={{ padding: 5 }} />

                                                </View>
                                                <View style={styles.callerDetailsContainer}>
                                                        <View style={styles.callerDetailsContainerWrap}>
                                                                <View style={styles.nameContainer}>
                                                                        <Text>Contacts help</Text>
                                                                </View>

                                                        </View>
                                                </View>
                                        </View>
                                </View>
                        </ScrollView>
                </SafeAreaView>
        );
};

export default Contacts;
