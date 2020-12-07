import 'react-native-gesture-handler';
import React, { useState, Component, useRef, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import {
//     createMaterialTopTabNavigator,
//     MaterialTopTabBar
// } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/FontAwesome';
import {
    TouchableOpacity,
    ScrollView,
    Text,
    StyleSheet,
    Animated,
    TextInput,
    View
} from 'react-native';
import {
    ChatHeaderLeft,
    ChatHeaderRight,
    ContactHeaderLeft,
    ContactHeaderRight
} from '../Components';
import Calls from './Calls';
import Chats from './Chats';
import Status from './Status';
import Contacts from './Contacts';
import Message from './Message';
import Profile from './Profile';
import NewGroup from './NewGroup';
import NewBroadCast from './NewBroadCast';
import WhatsAppWeb from './WhatsAppWeb';
import Settings from './Settings';
import Account from './Account';
import ChatSettings from './ChatSettings';
import Notifications from './Notifications';
import DataStorageUsage from './DataStorageUsage';
import Security from './Security';
import Help from './Help';
import ChangeNumber from './ChangeNumber';
import StarredMessages from './StarredMessages';
import Privacy from './Privacy';
import TwoStepVerification from './TwoStepVerification';
import RequestAccountInfo from './RequestAccountInfo';
import DeleteAccount from './DeleteAccount';
import ChatScene from './ChatScene';
import Camera from './Camera';
import Login from './Login';
import ChooseCountry from './ChooseCountry';
import OTPScreen from './OTPScreen';
import CallingScreen from './CallingScreen';
import VideoCalling from './VideoCalling';
import WelcomeScreen from './WelcomeScreen';
import { consts } from '.././Assets/Consts';
import { Store } from '../StateManagement';
import {
    TABSTATE,
    SET_SEARCHPRESSED,
    TEXTINPUT
} from '../StateManagement/Actions/types';
import { useSelector } from 'react-redux';
import { useLinkProps } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
var chatSearchVariable;
import GestureRecognizer, {
    swipeDirections
} from 'react-native-swipe-gestures';

export const TabView = ({ navigation }) => {
    const [activePage, setActivePage] = useState(1);
    const [tabClicked, setTabClicked] = useState(false);
    const [tabName, setTabName] = useState(null);
    const [gestureName, setGestureName] = useState(null);
    const [searchpressed, setSearchpressed] = useState(false);
    const giveData = (searchpressed) => {
        setSearchpressed(searchpressed);
        if (searchpressed == true && activePage == 1) {
            setTabName('Chats');
        }
        if (searchpressed == true && activePage == 2) {
            setTabName('Status');
        }
        if (searchpressed == true && activePage == 3) {
            setTabName('Calls');
        }
    };
    const screensArray = [<Status />, <Chats />, <Status />, <Calls />];

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <ChatHeaderRight
                        type={activePage}
                        giveData={(searchpressed) => giveData(searchpressed)}
                    />
                );
            }
        });
    });
    Store.dispatch({ type: TABSTATE, data: tabName });
    Store.dispatch({ type: SET_SEARCHPRESSED, data: searchpressed });
    const setSelectedTab = (val) => {
        setActivePage(val);
        setTabClicked(true);
    };

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
    const onSwipeLeft = (gestureState) => {
        if (activePage != 3) {
            setActivePage(activePage + 1);
        }
    };

    const onSwipeRight = (gestureState) => {
        if (activePage != 0) {
            setActivePage(activePage - 1);
        }
    };
    const onSwipe = (gestureName, gestureState) => {
        const {
            SWIPE_UP,
            SWIPE_DOWN,
            SWIPE_LEFT,
            SWIPE_RIGHT
        } = swipeDirections;
        setGestureName(gestureName);
        switch (gestureName) {
            case SWIPE_UP:
                break;
            case SWIPE_DOWN:
                break;
            case SWIPE_LEFT:
                break;
            case SWIPE_RIGHT:
                break;
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: '#075e54',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-evenly',
                    flex: 1
                }}
            >
                <TouchableOpacity onPress={() => setSelectedTab(0)}>
                    <View
                        style={[
                            Tabstyles.cameraContainer,
                            activePage == 0
                                ? Tabstyles.activeCameraContainer
                                : null
                        ]}
                    >
                        <Entypo
                            name="camera"
                            color="white"
                            size={23}
                            style={[
                                { color: activePage == 0 ? 'white' : 'grey' }
                            ]}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTab(1)}>
                    <View
                        style={[
                            Tabstyles.menuContainer,
                            activePage == 1
                                ? Tabstyles.activeMenuContainer
                                : null
                        ]}
                    >
                        <Text
                            style={[
                                Tabstyles.menuText,
                                { color: activePage == 1 ? 'white' : 'grey' }
                            ]}
                        >
                            CHATS
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTab(2)}>
                    <View
                        style={[
                            Tabstyles.menuContainer,
                            activePage == 2
                                ? Tabstyles.activeMenuContainer
                                : null
                        ]}
                    >
                        <Text
                            style={[
                                Tabstyles.menuText,
                                { color: activePage == 2 ? 'white' : 'grey' }
                            ]}
                        >
                            STATUS
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTab(3)}>
                    <View
                        style={[
                            Tabstyles.menuContainer,
                            activePage == 3
                                ? Tabstyles.activeMenuContainer
                                : null
                        ]}
                    >
                        <Text
                            style={[
                                Tabstyles.menuText,
                                { color: activePage == 3 ? 'white' : 'grey' }
                            ]}
                        >
                            CALLS
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <GestureRecognizer
                onSwipe={(direction, state) => onSwipe(direction, state)}
                onSwipeLeft={(state) => onSwipeLeft(state)}
                onSwipeRight={(state) => onSwipeRight(state)}
                config={config}
                style={{
                    flex: 14
                }}
            >
                <View
                    style={{
                        width: '100%',
                        flex: 1,
                        backgroundColor: 'white'
                    }}
                >
                    {screensArray[activePage]}
                </View>
            </GestureRecognizer>
        </View>
    );
};

const Tabstyles = StyleSheet.create({
    cameraContainer: {
        width: consts.ScreenWidth / 10,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#075e54'
    },
    activeCameraContainer: {
        width: consts.ScreenWidth / 10,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#075e54',
        borderBottomWidth: 2,
        borderBottomColor: 'white'
    },
    menuContainer: {
        width: consts.ScreenWidth / 3.5,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#075e54'
    },
    activeMenuContainer: {
        width: consts.ScreenWidth / 3.5,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#075e54',
        borderBottomWidth: 2,
        borderBottomColor: 'white'
    },
    menuText: {
        fontSize: 12,
        fontWeight: 'bold'
    }
});

const Stack = createStackNavigator();
export default function MyStack({ navigation }) {
    const [searchPressedState, setSearchPressedState] = useState(false);
    const [tabState, setTabState] = useState(false);
    const [contactSearchpress, setContactSearchpress] = useState(false);
    const [textInput, setTextInput] = useState(false);

    const searchPressed = useSelector(
        (state) => state.searchPressed.searchPressed
    );
    var tab = useSelector((state) => state.searchPressed.tabState);

    useEffect(() => {
        setSearchPressedState(searchPressed);
        setTabState(tab);
        console.log('searchPressedv', searchPressedState);
        console.log('tabStatev', tabState);
    }, [searchPressed, searchPressedState, tab, tabState]);

    const goBack = () => {
        Store.dispatch({ type: SET_SEARCHPRESSED, data: false });
        Store.dispatch({ type: TABSTATE, data: 'Chats' });
    };
    const submitTextInput = () => {
        Store.dispatch({ type: TEXTINPUT, data: textInput });
    };
    const clearTextInput = () => {
        setTextInput(null);
        Store.dispatch({ type: TEXTINPUT, data: null });
    };
    return (
        <Stack.Navigator initialRouteName="WhatsApp">
            <Stack.Screen
                name="WhatsApp"
                component={
                    !searchPressed
                        ? TabView
                        : searchPressed && tabState === 'Chats'
                        ? Chats
                        : searchPressed && tabState === 'Status'
                        ? Status
                        : searchPressed && tabState === 'Calls'
                        ? Calls
                        : TabView
                }
                options={
                    searchPressed == true
                        ? {
                              headerShown: searchPressed == true ? true : false,
                              headerTitle: null,
                              //   headerTitleAlign: 'center',
                              headerLeft: () => {
                                  return (
                                      <View
                                          style={{
                                              flexDirection: 'row',
                                              alignItems: 'center',
                                              paddingHorizontal: 10,
                                              backgroundColor: 'white',
                                              borderBottomWidth: 1,
                                              borderBottomColor: 'lightgray',
                                              flex: 1
                                          }}
                                      >
                                          <Feather
                                              onPress={() => goBack()}
                                              name="arrow-left"
                                              size={24}
                                              color="#128c7e"
                                              style={{
                                                  paddingRight: 20
                                              }}
                                          />
                                          <TextInput
                                              placeholder="Search..."
                                              onChangeText={setTextInput}
                                              value={textInput}
                                              onSubmitEditing={() =>
                                                  submitTextInput()
                                              }
                                              style={{
                                                  //   backgroundColor: 'yellow',
                                                  width:
                                                      consts.ScreenWidth / 1.35
                                              }}
                                          />
                                          <Entypo
                                              onPress={() => clearTextInput()}
                                              name="cross"
                                              size={24}
                                              color="#128c7e"
                                              style={{
                                                  paddingLeft: 15
                                              }}
                                          />
                                      </View>
                                  );
                              },
                              headerRight: () => {
                                  return null;
                              },
                              headerStyle: {
                                  backgroundColor: 'white',
                                  elevation: 0
                              },
                              headerTintColor: 'green'
                          }
                        : {
                              headerStyle: {
                                  backgroundColor: '#075e54',
                                  elevation: 0
                              },
                              headerTintColor: '#fff',
                              headerTitleStyle: {
                                  fontWeight: 'bold'
                              },
                              headerShown: true,
                              headerTitleAlign: 'left',
                              headerTitle: 'WhatsApp',
                              headerLeft: () => {
                                  return null;
                              }
                          }
                }
            />

            <Stack.Screen
                name="Chats"
                component={Chats}
                initialRouteParams={{ search: textInput }}
                navigationOptions={{
                    params: {
                        search: textInput
                    }
                }}
                options={{
                    headerShown:
                        searchPressed == true && tabState == 'Calls'
                            ? true
                            : false
                }}
            />
            <Stack.Screen name="Calls" component={Calls} />
            <Stack.Screen name="Status" component={Status} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen
                name="Select contact"
                component={Contacts}
                options={{
                    title: contactSearchpress ? null : 'Select contact',
                    headerStyle: {
                        borderBottomWidth: 1,
                        borderBottomColor: 'grey',
                        backgroundColor: contactSearchpress
                            ? 'white'
                            : '#075e54',
                        elevation: 0
                    },

                    headerTintColor: contactSearchpress ? 'red' : 'yellow',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            />
            <Stack.Screen name="Message" component={Message} />
            <Stack.Screen name="NewBroadCast" component={NewBroadCast} />
            <Stack.Screen name="NewGroup" component={NewGroup} />
            <Stack.Screen name="WhatsAppWeb" component={WhatsAppWeb} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="ChatSettings" component={ChatSettings} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen
                name="DataStorageUsage"
                component={DataStorageUsage}
            />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="Security" component={Security} />
            <Stack.Screen name="ChangeNumber" component={ChangeNumber} />
            <Stack.Screen name="StarredMessages" component={StarredMessages} />
            <Stack.Screen name="Privacy" component={Privacy} />
            <Stack.Screen
                name="TwoStepVerification"
                component={TwoStepVerification}
            />
            <Stack.Screen
                name="RequestAccountInfo"
                component={RequestAccountInfo}
            />
            <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
            <Stack.Screen name="ChatScene" component={ChatScene} />
            <Stack.Screen name="Contacts" component={Contacts} />
            <Stack.Screen
                name="Camera"
                component={Camera}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ChooseCountry" component={ChooseCountry} />
            <Stack.Screen name="OTPScreen" component={OTPScreen} />
            <Stack.Screen name="CallingScreen" component={CallingScreen} />
            <Stack.Screen name="VideoCalling" component={VideoCalling} />
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                // headerShown={false}
            />
        </Stack.Navigator>
    );
}
