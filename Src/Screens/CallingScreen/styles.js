import { StyleSheet } from 'react-native';
import { consts } from '../../Assets/Consts';
const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor: "red",
        flex: 1,
        backgroundColor: 'white'
    },
    callerContainer: {
        backgroundColor: '#128c7e',
        flex: 1
    },
    imageContainer: {
        // backgroundColor: "red",
        alignItems: 'center',
        flex: 3
    },
    iconContainer: {
        backgroundColor: '#128c7e',
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: "yellow",
        alignItems: 'center'
    },
    callerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: consts.textSizes(25),
        paddingVertical: 15
    },
    statusText: {
        color: 'white',
        textAlign: 'center'
    },
    contactsbuttonContainer: {
        bottom: consts.ScreenHeight / 15,
        // right: 10,
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#F92002',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    volumeIconContainer: {
        // flex: 1,
        justifyContent: 'center',
        height: 55,
        width: 55,
        borderRadius: 25
        // backgroundColor: "pink"
    },
    videocamIconContainer: {
        // flex: 1,
        justifyContent: 'center',
        height: 55,
        width: 55,
        borderRadius: 25
        // backgroundColor: "pink"
    },
    microphoneIconContainer: {
        // flex: 1,
        justifyContent: 'center',
        height: 55,
        width: 55,
        borderRadius: 25
        // backgroundColor: "pink",
        // shadowColor: '#000',
        // shadowOpacity: 0.3,
        // elevation: 10,
        // shadowRadius: 2,
        // shadowOffset: { width: 5, height: 1 },
    },
    iconStyle: {
        alignSelf: 'center'
    },
    eachIconContainer: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: "yellow"
        alignItems: 'center'
    }
});
export default styles;
