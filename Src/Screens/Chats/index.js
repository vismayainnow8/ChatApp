import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    StatusBar,
    Image,
    View
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { consts } from '../../Assets/Consts';
import {
    TABSTATE,
    SET_SEARCHPRESSED
} from '../../StateManagement/Actions/types';
import { Store } from '../../StateManagement';
import { useSelector } from 'react-redux';
import styles from './styles';
const DATA = [
    {
        id: 1,
        first_name: 'Glenn',
        mobile: true,
        message: 'Hey there! I am using WhatsApp',
        date: '22-Mar-2016',
        time: '5:46 PM',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        number: 1
    },
    {
        id: 2,
        first_name: 'Carl',
        mobile: false,
        message: 'Do you smell what the rock is cooking?',
        date: '22-Feb-2016',
        time: '09:38 PM',
        image: 'https://randomuser.me/api/portraits/women/37.jpg',
        number: 2
    },
    {
        id: 3,
        first_name: 'Rick',
        mobile: true,
        message: "Hello there it's been a while. Not much",
        date: '01-Jul-2016',
        time: '1:33 PM',
        image: 'https://randomuser.me/api/portraits/women/13.jpg',
        number: 3
    },
    {
        id: 4,
        first_name: 'Maggie',
        mobile: false,
        message: 'Oh Baby, baby baby... my baby baby',
        date: '19-Feb-2016',
        time: '02:59 AM',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        number: 4
    },
    {
        id: 5,
        first_name: 'Michael',
        mobile: true,
        message: 'Extreme fishing with Robson green',
        date: '12-Aug-2016',
        time: '9:17 AM',
        image: 'https://randomuser.me/api/portraits/men/19.jpg',
        number: 5
    },
    {
        id: 6,
        first_name: 'Jesus',
        mobile: false,
        message: "Why do people care about marcos' burial in LBNM",
        date: '13-Aug-2016',
        time: '10:37 PM',
        image: 'https://randomuser.me/api/portraits/men/18.jpg',
        number: 6
    },
    {
        id: 7,
        first_name: 'Daryn',
        mobile: true,
        message: 'Simply amazing, brilliant and absolutely fantastic',
        date: '17-Nov-2016',
        time: '07:32 AM',
        image: 'https://randomuser.me/api/portraits/men/30.jpg',
        number: 7
    },
    {
        id: 8,
        first_name: 'Fred',
        mobile: false,
        message: 'Saw you this morning and i wake up shitty.',
        date: '29-Nov-2016',
        time: '12:56 AM',
        image: 'https://randomuser.me/api/portraits/women/10.jpg',
        number: 8
    },
    {
        id: 9,
        first_name: 'James',
        mobile: false,
        message: 'I will never walk alone',
        date: '27-Dec-2016',
        time: '9:29 PM',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        number: 9
    },
    {
        id: 10,
        first_name: 'Matthew',
        mobile: true,
        message: 'Got it',
        date: '31-Dec-2016',
        time: '7:43 PM',
        image: 'https://randomuser.me/api/portraits/men/18.jpg',
        number: 10
    }
];

const Chats = (props) => {
    const [] = useState(false);
    const navigation = useNavigation();
    const [searchPressedState, setSearchPressedState] = useState(false);
    const [tabState, setTabState] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    var searchPressed = useSelector(
        (state) => state.searchPressed.searchPressed
    );
    var tab = useSelector((state) => state.searchPressed.tabState);

    useEffect(() => {
        console.log('props', props);
        setSearchPressedState(searchPressed);
        setTabState(tab);
    }, [searchPressed, searchPressedState, tab, tabState]);

    useEffect(() => {
        console.log('gotreduxonaschatstate', props.textInput);
        // alert(props.textInput);
    }, [props.textInput]);

    const onPressed = (selectedItem) => {
        setSelectedItem(selectedItem);
        console.log('selectedItem', selectedItem);
        navigation.navigate('ChatScene', { title: selectedItem });
    };

    const Item = ({
        image,
        first_name,
        missed,
        time,
        item,
        message,
        number
    }) => (
        <TouchableOpacity
            style={styles.listItemContainer}
            onPress={() => onPressed(item.first_name)}
        >
            <View style={styles.iconContainer}>
                <Image
                    source={{ uri: image }}
                    style={styles.initStyle}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.messageContainer}>
                <View style={styles.firstContainer}>
                    <Text>{first_name}</Text>
                    <Text style={styles.newtime}>{time}</Text>
                </View>
                <View style={styles.secondContainer}>
                    <View style={styles.dateContainer}>
                        <IconFontAwesome5
                            name={missed ? 'check-double' : 'check'}
                            size={10}
                            color={missed ? '#ed788b' : '#666'}
                        />
                        <Text
                            numberOfLines={1}
                            style={{
                                paddingLeft: 10,
                                fontWeight: '400',
                                color: '#666',
                                fontSize: 12
                                // flexWrap: 'wrap',
                            }}
                        >
                            {message}
                        </Text>
                    </View>
                    <View style={styles.numbercountContainer}>
                        <Text style={styles.numberCount}>{number}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    function renderItem({ item, index }) {
        const isSelected = selectedItem === item.id;
        return (
            <Item
                item={item}
                image={item.image}
                first_name={item.first_name}
                missed={item.missed}
                time={item.time}
                date={item.date}
                message={item.message}
                number={item.number}
            />
        );
    }

    return (
        <SafeAreaView style={{ width: consts.ScreenWidth, flex: 1 }}>
            <StatusBar backgroundColor="#075e54" />
            <View style={styles.mainContainer}>
                <View style={styles.contentContainer}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                    <TouchableOpacity
                        style={styles.contactsbuttonContainer}
                        onPress={() => navigation.navigate('Select contact')}
                    >
                        <IconMaterialCommunityIcons
                            name="android-messages"
                            color="white"
                            size={23}
                            style={{ padding: 5 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    return {
        textInput: state.textInput.textInput
    };
};

export default connect(mapStateToProps, null)(Chats);
