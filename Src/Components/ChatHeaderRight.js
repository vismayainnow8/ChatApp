import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Screens/Settings/styles';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export const ChatHeaderRight = (props, statusCode) => {
    const [chatSearchpressed, setChatSearchpressed] = useState(false);
    const [settingsPressed, setSettingsPressed] = useState(false);
    const [type, setType] = useState(props.type);
    const [selectedId, setSelectedId] = useState(null);
    const [DATA, setDATA] = useState(null);
    const [menuState, setMenuState] = useState(null);
    const Chats = [
        { text: 'New group' },
        { text: 'New broadcast' },
        { text: 'WhatsApp Web' },
        { text: 'Starred messages' },
        { text: 'Settings' }
    ];
    const searchPressed = useSelector(
        (state) => state.searchPressed.searchPressed
    );

    const Status = [{ text: 'Status privacy' }, { text: 'Settings' }];
    const Calls = [{ text: 'Clear call log' }, { text: 'Settings' }];
    const navigation = useNavigation();
    // const _menu = useRef(null);
    const settingsIconFieldRef = useRef(null);
    var _menu = null;

    const setMenuRef = (ref) => {
        _menu = ref;
    };

    const showMenu = () => {
        _menu.show();
    };

    const ChatMenu = (
        <View style={{ backgroundColor: 'white' }}>
            <MenuItem onPress={() => navigation.navigate('NewGroup')}>
                New group
            </MenuItem>
            <MenuItem onPress={() => navigation.navigate('NewBroadCast')}>
                {' '}
                New broadcast
            </MenuItem>
            <MenuItem onPress={() => navigation.navigate('WhatsAppWeb')}>
                WhatsApp Web
            </MenuItem>
            <MenuItem onPress={() => navigation.navigate('StarredMessages')}>
                Starred messages
            </MenuItem>
            <MenuItem onPress={() => navigation.navigate('Settings')}>
                Settings
            </MenuItem>
        </View>
    );
    const StatusMenu = (
        <View style={{ backgroundColor: 'white' }}>
            <MenuItem onPress={() => navigation.navigate('Settings')}>
                Status privacy
            </MenuItem>
            <MenuItem onPress={() => navigation.navigate('Settings')}>
                Settings
            </MenuItem>
        </View>
    );
    const CallsMenu = (
        <View style={{ backgroundColor: 'white' }}>
            <MenuItem onPress={() => navigation.navigate('Settings')}>
                Clear call log
            </MenuItem>
            <MenuItem onPress={() => navigation.navigate('Settings')}>
                Settings
            </MenuItem>
        </View>
    );

    useEffect(() => {
        if (props.type == '1') {
            setMenuState(ChatMenu);
        }
        if (props.type == '2') {
            setMenuState(StatusMenu);
        }
        if (props.type == '3') {
            setMenuState(CallsMenu);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.type]);

    const onSearchPress = (chatSearchpressed = true) => {
        props.giveData(chatSearchpressed);
        setChatSearchpressed(true);
    };

    const settingPressed = () => {
        setSettingsPressed(true);
        // _menu.show();
    };

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
            <Text style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                {item.text}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: 'transparent',
                position: 'relative'
            }}
        >
            {searchPressed ? null : (
                <IconAntDesign
                    onPress={() => onSearchPress()}
                    name="search1"
                    size={24}
                    color="white"
                />
            )}
            {searchPressed ? null : (
                <View>
                    <Menu
                        ref={(ref) => setMenuRef(ref)}
                        button={
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#075e54',
                                    position: 'relative'
                                }}
                            >
                                <Icon
                                    onPress={() => showMenu()}
                                    name="dots-three-vertical"
                                    size={24}
                                    color="white"
                                />
                            </TouchableOpacity>
                        }
                    >
                        {menuState}
                    </Menu>
                </View>
            )}
        </View>
    );
};
