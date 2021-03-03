import React, { useLayoutEffect, useState } from "react";
import { View, Text, Alert, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { StatusListImage } from './components/StatusListImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { consts } from '../../Assets/Consts';

const ViewBoxesWithColorAndText = ({ route }) => {
        const { myStatus } = route.params;

        const navigation = useNavigation()
        const [selectedId, setSelectedId] = useState(null);
        const [statusItemToDelete, setStatusItemToDelete] = useState();
        const [formattedStatus, setFormattedStatus] = useState(myStatus.data[0].statuses);
        const [statusHolder, setStatusHolder] = useState(myStatus.data[0].statuses);
        const [loading, setLoading] = useState(false);

        useLayoutEffect(() => {
                navigation.setOptions({
                        headerTitle: 'My Status',
                        headerStyle: {
                                backgroundColor: '#075e54',
                                elevation: 0,
                        },
                        headerTintColor: 'white',
                });
        });

        const callAlert = (item) => {
                Alert.alert('', 'Are you sure to delete this chat ?', [
                        { text: 'CANCEL', onPress: () => console.log('cancelled') },
                        { text: 'OK', onPress: () => deleteStatus(item) },
                ]);
        }

        const deleteStatus = async () => {
                setLoading(true)
                var f
                var filteredElements = formattedStatus.filter(function (item, index) { f = index; return item == item; });
                if (!filteredElements.length) {
                        return false;
                }
                formattedStatus.splice(f, 1)
                // await firestore()
                //         .collection('Statuses')
                //         .where('contacts', '==', auth().currentUser.uid)
                //         .update({ data: formattedStatus })
                //         .then(() => {
                //                 console.log('false')
                //                 setLoading(false)
                //         })
                //         .catch((err) => console.log('err', err))
        }
        const renderItem = ({ item }) => {
                return (
                        <View style={styles.listItemContainer} >
                                < View style={styles.iconContainer} >
                                        <StatusListImage data={item} />
                                </View>
                                <View style={styles.messageContainer}>
                                        <View style={styles.firstContainer}>
                                                <Text numberOfLines={1}
                                                        style={styles.listTime}
                                                >
                                                        {moment(item.time).format('D MMM YYYY h:mm a')}
                                                </Text>
                                        </View>
                                </View>

                                <TouchableOpacity style={{ justifyContent: "center", }} onPress={() => callAlert(item)}>
                                        <MaterialCommunityIcons
                                                name="delete"
                                                size={24}
                                                color="#128c7e"
                                                style={{ right: 5 }}
                                        />
                                </TouchableOpacity>
                        </View >

                );
        };
        return (
                <View style={styles.mainContainer}  >
                        {loading ? (
                                <ActivityIndicator
                                        color="#128c7e"
                                        size={consts.textSizes(20)}
                                        style={{ flex: 1, paddingVertical: 30 }}
                                />
                        ) :
                                <FlatList
                                        data={formattedStatus}
                                        renderItem={renderItem}
                                // keyExtractor={(item) => item.id}
                                // extraData={selectedId}
                                />}
                </View>
        );
};

export default ViewBoxesWithColorAndText;