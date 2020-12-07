import React, { useLayoutEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { consts } from '../../Assets/Consts';
import styles from './styles';

const VideoScreen = ({ navigation }) => {
    const [volume, setVolume] = useState(false);
    const [video, setVideo] = useState(false);
    const [microphone, setMicrophone] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'End to end encrypted',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: 'grey',
                elevation: 0
            },
            headerTitleStyle: {
                fontSize: 13
            },
            headerTintColor: 'white',
            headerLeft: () => {
                return (
                    <AntDesign
                        onPress={() => downArrowFunction()}
                        name="down"
                        size={25}
                        color="white"
                        style={{ paddingLeft: 10 }}
                    />
                );
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    const videocamPressed = () => {
        if (video) {
            setVideo(false);
        } else {
            setVideo(true);
        }
    };
    const microphonePressed = () => {
        if (microphone) {
            setMicrophone(false);
        } else {
            setMicrophone(true);
        }
    };
    const volumePressed = () => {
        if (volume) {
            setVolume(false);
        } else {
            setVolume(true);
        }
    };
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor="grey" />
            <View style={styles.callerContainer}>
                <Text style={styles.callerText}>Adithi Sharma</Text>
                <Text style={styles.statusText}>Ringing</Text>
            </View>
            <View style={styles.imageContainer}>
                {/* <Image
                                        source={require('../../Assets/welcomeImage.jpg')}
                                        style={styles.image}
                                /> */}
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.eachIconContainer}>
                    <TouchableOpacity
                        style={[
                            styles.volumeIconContainer,
                            { backgroundColor: volume ? '#9e9e9e' : 'grey' }
                        ]}
                        onPress={() => volumePressed()}
                    >
                        <FontAwesome
                            name="volume-up"
                            size={25}
                            color="white"
                            style={styles.iconStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.eachIconContainer}>
                    <TouchableOpacity
                        style={[styles.videocamIconContainer]}
                        onPress={() => videocamPressed()}
                    >
                        <MaterialIcons
                            name="videocam"
                            size={25}
                            color="white"
                            style={styles.iconStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.eachIconContainer}>
                    <TouchableOpacity
                        style={[
                            styles.microphoneIconContainer,
                            { backgroundColor: microphone ? '#9e9e9e' : 'grey' }
                        ]}
                        onPress={() => microphonePressed()}
                    >
                        <FontAwesome
                            name="microphone-slash"
                            size={25}
                            color="white"
                            style={styles.iconStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default VideoScreen;
