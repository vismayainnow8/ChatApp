import React, { useState, useRef, useEffect } from 'react';
import { Button, TouchableOpacity, Text, View } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
export const ChatHeaderLeft = (props, { navigation }) => {
        const [propsChatSearchpress, setChatPropSearchpress] = useState(props.propsChatSearchpress);

        return (
                <View style={{ flexDirection: 'row' }} >
                        {
                                props.propsChatSearchpress ?
                                        <IconAntDesign onPress={() => navigation.navigate('WhatsApp')} name="arrowleft" size={24} color="#075e54" /> : null
                        }
                        {
                                props.propsChatSearchpress ?
                                        <Text style={{ color: "grey" }}  >Search...</Text> : null
                        }
                </View>

        );
};
