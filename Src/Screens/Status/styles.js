import { StyleSheet } from 'react-native';
import { consts } from '../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
    mainContainer: {
        width: consts.ScreenWidth,
        backgroundColor: 'white'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#075e54',
        alignItems: 'center',
        paddingRight: 5
    },
    leftHeaderContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    rightHeaderContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    contentContainer: {
        flex: 6,
        backgroundColor: 'blue'
    },
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
        marginTop: 5
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-start',
        paddingRight: 2
    },
    messageContainer: {
        flex: 4,
        justifyContent: 'center',
        height: '100%',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.25
    },
    messageContainerNew: {
        flex: 4,
        backgroundColor: 'red'
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
    },
    numberCount: {
        color: 'white',
        fontSize: consts.textSizes(10)
    },
    numbercountContainer: {
        backgroundColor: '#25d366',
        height: 18,
        width: 18,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10
        // right: 0
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
        alignItems: 'center'
        // paddingHorizontal: 25
    },
    detailedcallerDetailsContainer: {
        flex: 7,
        justifyContent: 'center'
    },
    callerDetailsContainerWrap: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    //     modalContainer: {
    //         right: 0,
    //         top: 0,
    //         position: 'absolute',
    //         height: consts.ScreenHeight / 2,
    //         width: consts.ScreenWidth / 2,
    //         backgroundColor: 'pink',
    //         flex: 1,
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         paddingHorizontal: 25,
    //         zIndex: 1000
    //     },

    grey: {
        fontWeight: '400',
        color: '#666',
        fontSize: 12
    },
    updateContainer: {
        padding: consts.ScreenWidth * 0.024,
        backgroundColor: '#E8E8E8'
    }
});

export default styles;
