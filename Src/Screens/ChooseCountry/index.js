import React, { useState, useRef, useLayoutEffect } from 'react';
import {
    FlatList,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item'
    }
];

const ChooseCountry = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [selected, setSelected] = useState(null);
    const phone = useRef(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Choose a country',
            headerRight: () => {
                return (
                    <Ionicons
                        name="search"
                        size={24}
                        color="#128c7e"
                        style={{ paddingRight: 15 }}
                    />
                );
            },
            headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
                borderBottomWidth: 0.6,
                borderBottomColor: 'grey'
            },
            headerTintColor: '#128c7e'
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    const renderItem = ({ item }) => {
        // const selectedOne = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const Item = ({ item, onPress, style }) => (
            <TouchableOpacity
                style={styles.detailedlistItemContainer}
                onPress={() => setSelectedId(item.id)}
            >
                <View style={styles.flagContainer}>
                    <Entypo
                        name="flag"
                        color="#128c7e"
                        size={23}
                        style={{ paddingVertical: 5 }}
                    />
                </View>
                <View style={styles.detailednameContainer}>
                    <Text style={styles.nameText}>India</Text>
                    <Text style={styles.statusText}>rtyguhkjl</Text>
                </View>
                <View style={styles.numberContainer}>
                    <Text style={styles.nameText}>+91</Text>
                </View>
                <View style={styles.tickContainer}>
                    {item.id == selectedId ? (
                        <Entypo
                            name="check"
                            color="#128c7e"
                            size={23}
                            style={{ padding: 5 }}
                        />
                    ) : null}
                </View>
            </TouchableOpacity>
        );
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                // style={{ backgroundColor }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor="#075e54"
                // barStyle="dark-content"
            />
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

export default ChooseCountry;
