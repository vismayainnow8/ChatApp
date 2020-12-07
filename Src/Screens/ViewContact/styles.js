import { Store } from '../StateManagement';
import { TABSTATE, SET_SEARCHPRESSED } from '../StateManagement/Actions/types';
import { useSelector } from 'react-redux';
import { useLinkProps } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

var chatSearchVariable;

const Tab = createMaterialTopTabNavigator();

function MyTabs({ navigation }) {
    const [tabstate, setTabstate] = useState('Chats');
    const [searchpressed, setSearchpressed] = useState(false);
    const giveData = (searchpressed) => {
        setSearchpressed(searchpressed);
    };

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <ChatHeaderRight
                        type={tabstate}
                        giveData={(searchpressed) => giveData(searchpressed)}
                    />
                );
            }
        });
        console.log('searched', searchpressed);
        Store.dispatch({ type: TABSTATE, data: tabstate });
        Store.dispatch({ type: SET_SEARCHPRESSED, data: searchpressed });
        console.log('state', Store.getState());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tabstate, searchpressed]);

    return (
        <Tab.Navigator
            initialRouteName="Chats"
            backBehavior="initialRoute"
            tabBarOptions={{
                showIcon: true,
                activeTintColor: 'white',
                inactiveTintColor: 'grey',
                labelStyle: { fontSize: 12 },
                style: {
                    backgroundColor: '#075e54',
                    height: consts.ScreenWidth * 0.16
                },
                tabBarPosition: 'top',
                swipeEnabled: true,
                animationEnabled: true,
                indicatorStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Tab.Screen
                name="Camera"
                listeners={{
                    tabPress: (e) => {
                        setTabstate('Camera');
                    }
                }}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <IconAntDesign
                            name="camera"
                            size={20}
                            color={tabstate == 'Camera' ? 'white' : 'grey'}
                            style={{ paddingTop: 5 }}
                        />
                    )
                }}
                component={Camera}
                initialParams={{ tabstate: tabstate }}
            />
            <Tab.Screen
                name="Chats"
                component={Chats}
                initialParams={{
                    tabstate: tabstate
                }}
                listeners={{
                    tabPress: (e) => {
                        setTabstate('Chats');
                    }
                }}
            />
            <Tab.Screen
                name="Status"
                component={Status}
                initialParams={{
                    tabstate: tabstate
                }}
                listeners={{
                    tabPress: (e) => {
                        setTabstate('Status');
                    }
                }}
            />
            <Tab.Screen
                name="Calls"
                component={Calls}
                initialParams={{
                    tabstate: tabstate
                }}
                listeners={{
                    tabPress: (e) => {
                        setTabstate('Calls');
                    }
                }}
            />
        </Tab.Navigator>
    );
}
const Stack = createStackNavigator();
export default function MyStack({ navigation }) {
    const [searchPressedState, setSearchPressedState] = useState(false);
    const [tabState, setTabState] = useState(false);
    const [contactSearchpress, setContactSearchpress] = useState(false);

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

    return (
        <Stack.Navigator initialRouteName="WhatsApp">
            <Stack.Screen
                name="WhatsApp"
                component={
                    !searchPressed
                        ? MyTabs
                        : searchPressed && tabState === 'Chats'
                        ? Chats
                        : searchPressed && tabState === 'Status'
                        ? Status
                        : searchPressed && tabState === 'Calls'
                        ? Calls
                        : searchPressed && tabState === 'Camera'
                        ? Camera
                        : MyTabs
                }
                options={
                    searchPressed == true && tabState == 'Chats'
                        ? {
                              headerShown:
                                  searchPressed == true && tabState == 'Chats'
                                      ? true
                                      : false,
                              headerTitle: 'Search...',
                              headerTitleAlign: 'center',
                              headerLeft: () => {
                                  return (
                                      <Entypo
                                          onPress={() => goBack()}
                                          name="dots-three-vertical"
                                          size={24}
                                          color="green"
                                          style={{ paddingRight: 10 }}
                                      />
                                  );
                              },
                              headerRight: () => {
                                  return null;
                              },
                              headerStyle: {
                                  backgroundColor: 'pink',
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
            {/* <Stack.Screen name="ChatScene" component={ChatScene} /> */}
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
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
    );
}
