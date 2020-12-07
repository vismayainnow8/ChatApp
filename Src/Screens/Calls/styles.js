import { StyleSheet } from 'react-native';
import { consts } from '../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        height: consts.ScreenWidth * 0.024
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#075e54',
        alignItems: 'center',
        paddingRight: 2
    },
    leftHeaderContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    rightHeaderContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    contentContainer: {},
    logoText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        alignItems: 'flex-start',
        marginLeft: 10
    },
    listItemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        // paddingVertical: 10,
        // borderWidth: 1,

        marginTop: 5
        // paddingVertic
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-start',
        paddingRight: 2
    },
    messageContainer: {
        flex: 4,
        justifyContent: 'center',
        // backgroundColor: 'yellow',
        height: '100%',
        // borderBottomColor: 'rgba(92,94,94,0.5)',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.25
    },
    firstContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        paddingTop: 5
    },
    secondContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        paddingBottom: 5
        // paddingTop: 5
    },
    nameContainer: {
        alignItems: 'flex-start',
        flex: 1
    },
    dateContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        flexShrink: 1,
        alignItems: 'center',
        paddingRight: 20
    },
    callIconContainer: {
        flex: 1,
        alignItems: 'flex-end'
        // backgroundColor: 'pink'
    },
    initStyle: {
        borderRadius: 55,
        width: 55,
        height: 55,
        marginVertical: 10
    },
    newtime: {
        color: '#25d366',
        fontSize: consts.textSizes(10)

        // color: 'red',
        // '#ed788b' : '#075e54'
    },
    numberCount: {
        color: 'white',
        fontSize: consts.textSizes(10)

        // '#ed788b' : '#075e54'
    },
    numbercountContainer: {
        backgroundColor: '#25d366',
        height: 18,
        width: 18,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contactsbuttonContainer: {
        bottom: 20,
        right: 10,
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#25d366',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailedlistItemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 20,
        backgroundColor: 'pink'
    },
    detailedcallerDetailsContainer: {
        flex: 7,
        justifyContent: 'center'
        // borderBottomColor: 'rgba(92,94,94,0.5)',
        // backgroundColor: "red"
        // borderBottomWidth: 0.25,
    },
    callerDetailsContainerWrap: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    modalContainer: {
        right: 0,
        top: 0,
        position: 'absolute',
        height: consts.ScreenHeight / 2,
        width: consts.ScreenWidth / 2,
        backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 20,
        zIndex: 1000
    }
});

export default styles;
