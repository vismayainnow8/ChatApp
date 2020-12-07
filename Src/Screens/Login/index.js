import { connect } from 'react-redux';
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Alert, TouchableOpacity, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { SmallButton } from '../../Components';
import { setConfirmation } from '../../StateManagement/Actions';
import styles from './styles';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

const Login = (props) => {
    const [number, setNumber] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [borderBottomWidthCountry, setBorderBottomWidthCountry] = useState(1);
    const [borderBottomWidthCode, setBorderBottomWidthCode] = useState(1);
    const [borderBottomWidthPhone, setBorderBottomWidthPhone] = useState(1);
    const [settingsPressed, setSettingsPressed] = useState(false);
    const [countryName, setCountryName] = useState('India');
    const [menuState, setMenuState] = useState(ChatMenu);
    var _menu = null;

    const setMenuRef = (ref) => {
        _menu = ref;
    };

    const showMenu = () => {
        _menu.show();
    };
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: 'Enter your phone number',
            headerTitleAlign: 'center',
            headerRight: () => {
                return (
                    <Menu
                        ref={(ref) => setMenuRef(ref)}
                        button={
                            <Entypo
                                onPress={() => showMenu()}
                                name="dots-three-vertical"
                                size={24}
                                color="#128c7e"
                                style={{ paddingRight: 10 }}
                            />
                        }
                    >
                        {menuState}
                    </Menu>
                );
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18
            },
            headerStyle: {
                backgroundColor: 'white',
                elevation: 0
            },
            headerTintColor: '#128c7e'
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    const signInWithPhoneNumber = async () => {
        if (number) {
            const phoneNumber = number;

            const confirmation = await auth().signInWithPhoneNumber(
                phoneNumber
            );
            if (confirmation) {
                setConfirm(confirmation);
                // actionData = {
                //     confirmation: 'confirmation'
                // };
                // setConfirmation(actionData);
                props.navigation.navigate('OTPScreen', {
                    confirmation: confirmation
                });
            }
        } else {
            Alert.alert('Please enter your phone number', [
                { text: 'OK', onPress: console.log('Cancel Pressed') }
            ]);
        }
    };
    const submitPhoneNumber = () => {
        // navigation.navigate('OTPScreen')
        signInWithPhoneNumber();
    };
    const onPressCountry = () => {
        setBorderBottomWidthCountry(2);
        props.navigation.navigate('ChooseCountry');
    };
    const ChatMenu = (
        <View style={{ backgroundColor: 'white' }}>
            <MenuItem onPress={() => navigation.navigate('NewGroup')}>
                Help
            </MenuItem>
        </View>
    );
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.firstLine}>
                Whatsapp will send an SMS message to verify your phone number.{' '}
                <Text style={styles.firstBlueLine}>What's my number ?</Text>
            </Text>

            <TouchableOpacity
                style={[
                    styles.countryContainer,
                    { borderBottomWidth: borderBottomWidthCountry }
                ]}
                onPress={() => onPressCountry()}
            >
                <Text>{countryName}</Text>

                <AntDesign
                    name="caretdown"
                    color="#128c7e"
                    size={15}
                    style={{
                        position: 'absolute',
                        right: 0
                    }}
                />
            </TouchableOpacity>
            <View style={styles.secondContainer}>
                <View
                    style={[
                        styles.countryCodeContainer,
                        { borderBottomWidth: borderBottomWidthCode }
                    ]}
                >
                    <Text style={styles.plus}>+</Text>
                    <TextInput
                        placeholder="91"
                        style={{ padding: 0 }}
                        onFocus={() => setBorderBottomWidthCode(2)}
                    ></TextInput>
                </View>
                <TextInput
                    style={[
                        styles.phoneNumberContainer,
                        {
                            borderBottomWidth: borderBottomWidthPhone
                        }
                    ]}
                    placeholder="phone number"
                    onChangeText={setNumber}
                    onFocus={() => setBorderBottomWidthPhone(2)}
                    onSubmitEditing={() => submitPhoneNumber()}
                />
            </View>
            <Text style={styles.plus}>Carrier SMS charges may apply</Text>
            <SmallButton
                title="NEXT"
                labelStyle={styles.labelStyle}
                style={styles.style}
                onPress={() => signInWithPhoneNumber()}
            />
            {/* {settingsPressed ? (
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
            ) : null} */}
        </View>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setConfirmation: (data) => dispatch(setConfirmation(data))
    };
};

export default connect(null, mapDispatchToProps)(Login);
