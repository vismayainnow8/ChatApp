import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
        Text,
        ScrollView,
        FlatList, Platform, PermissionsAndroid, TouchableOpacity, SafeAreaView, StatusBar,
        Image,
        View,
} from 'react-native'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { ChatHeaderRight } from '../../Components'
import Contact from 'react-native-contacts';

import styles from './styles';


const NewGroup = ({ navigation }) => {
        // const [] = useState(false);
        const [selectedItem, setSelectedItem] = useState(null);
        let [contacts, setContacts] = useState([]);


        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => {
                                return <IconAntDesign onPress={() => alert('search')} name="search1" size={24} color="white" style={{ paddingRight: 10 }} />

                        },
                        headerTitle: (
                                <View>
                                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>New Group</Text>
                                        <Text style={{ color: "white" }}>Add participants</Text>
                                </View>
                        ),
                        headerStyle: {
                                backgroundColor: '#075e54',
                                // backgroundColor: contactSearchpress ? 'white' : '#075e54',
                                elevation: 0
                        },
                        headerTintColor: 'white',

                })
                // eslint-disable-next-line react-hooks/exhaustive-deps
        })
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


        const onPressed = (selectedItem) => {
                setSelectedItem(selectedItem)
                console.log("selectedItem", selectedItem)
                // navigation.navigate('ChatScene', { title: selectedItem })
        }

        const Item = ({ image, displayName, item, message }) => (
                <TouchableOpacity onPress={() => onPressed(item.displayName)} style={styles.listItemContainer}>

                        <View style={styles.iconContainer}>
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
                                // image={item.image}
                                first_name={item.first_name}
                                missed={item.missed}
                                time={item.time}
                                date={item.date}
                                message={item.message}
                                number={item.number}

                        />
                );
        };

        return (

                <ScrollView style={styles.mainContainer}>
                        <StatusBar
                                backgroundColor="#075e54"
                                barStyle="light-content"
                        />
                        <View style={styles.contentContainer}>
                                <FlatList
                                        data={contacts}
                                        renderItem={renderItem}
                                // keyExtractor={(item) => item.id.toString()}
                                />

                        </View>
                </ScrollView>
        );
};

export default NewGroup;
