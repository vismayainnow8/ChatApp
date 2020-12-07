import { StyleSheet } from 'react-native';
import { consts } from '../../Assets/Consts';
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: consts.ScreenHeight * 0.08,

        paddingHorizontal: consts.ScreenWidth * 0.04
    },
    header: {
        color: '#128c7e',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        height: consts.ScreenWidth / 1.4,
        width: consts.ScreenWidth / 1.4,
        borderRadius: consts.ScreenWidth / 1.4,
        // marginVertical: 30
        marginBottom: consts.ScreenHeight * 0.08,
        marginTop: consts.ScreenHeight * 0.08
    },
    firstBlueLine: {
        textAlign: 'center',
        // marginLeft: 10000,
        // paddingLeft: 10000,
        lineHeight: 22,
        color: '#34b7f1'
    },
    style: {
        width: '80%'
    },
    labelStyle: {
        color: 'white'
    },
    textStatement: {
        textAlign: 'center',
        color: 'grey'
    }
});
export default styles;
