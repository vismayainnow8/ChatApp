import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors, consts, fonts } from '../Assets';


export const Search = props => {
        const callFunctionOnVisible = () => {
                setVisible(!visible)
                props.closingSearch()
        };

        var textInputRef;
        const [visible, setVisible] = useState(false);
        return (
                <>
                        <View style={[styles.container, props.style]}>
                                {visible &&
                                        <View style={styles.rowContainer}>
                                                <TextInput
                                                        autoFocus={true}
                                                        style={styles.textInput}
                                                        color="white"
                                                        placeholder='Search here'
                                                        placeholderTextColor="white"
                                                        defaultValue={props.initialSearchValue}
                                                        ref={input => { textInputRef = input; }}
                                                        onEndEditing={() => setVisible(true)}
                                                        onSubmitEditing={
                                                                (event) => {
                                                                        props.onSearch(event.nativeEvent.text, textInputRef);
                                                                }
                                                        }
                                                />
                                                <TouchableOpacity style={styles.touchableOpacity} onPress={() => { visible ? callFunctionOnVisible() : setVisible(!visible) }}>
                                                        <Feather style={styles.button} name={'x'} color="white" size={20} />
                                                </TouchableOpacity>
                                        </View>
                                }
                                {
                                        !visible &&
                                        <TouchableOpacity style={styles.touchableOpacitySearch} onPress={() => { visible ? callFunctionOnVisible() : setVisible(!visible) }}>
                                                <Feather style={styles.button} name={'search'} color="white" size={20} />
                                        </TouchableOpacity>
                                }

                        </View>
                </>
        );
};

const styles = StyleSheet.create({
        container: {
                // alignItems: 'center',
                justifyContent: "center",
                // paddingTop: 10,
                // paddingBottom: 10,
                paddingHorizontal: 20,
                // flexDirection: 'row',
                // backgroundColor: "red"
        },
        rowContainer: {
                paddingTop: 30,
                flexDirection: "row",
                alignItems: "stretch"
        },
        textInput: {
                // paddingTop: 30,
                height: consts.ScreenWidth * 0.08,
                fontSize: consts.textSizes(15),
                flex: 1,
                paddingBottom: 0,
                // fontFamily: fonts[3],
        },
        button: {
                width: consts.ScreenWidth * 0.08,
                // height: consts.ScreenWidth * 0.08,
                marginLeft: consts.ScreenWidth * 0.02,
                textAlignVertical: 'bottom',
                textAlign: 'right',
                // backgroundColor: "red"

        },
        touchableOpacity: {
                // paddingTop: 30,
                // backgroundColor: "pink",
                // paddingHorizontal: consts.ScreenWidth * 0.1,
                alignSelf: "flex-end"
        },
        touchableOpacitySearch: {
                paddingTop: 30,
                alignItems: "flex-end",
                // backgroundColor: "orange",
                // paddingHorizontal: consts.ScreenWidth * 0.1,
        }
});