import { StyleSheet } from 'react-native';
import { consts } from '../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
        mainContainer: {
                flex: 1,
                backgroundColor: 'white',
        },
        title: {

        },
        item: {
                backgroundColor: "pink"
        },
        iconContainer: {
                // paddingHorizontal: 10,
                paddingVertical: 8,
        },
        listItemContainer: {
                flexDirection: 'row',
        },
        messageContainer: {
                flex: 1,
                justifyContent: 'center',

        },
        firstContainer: {
                flexDirection: 'row',
                paddingHorizontal: 5,
                justifyContent: 'space-between',
                paddingTop: 5,
        },
        secondContainer: {
                flexDirection: 'row',
                paddingHorizontal: 5,
                justifyContent: 'space-between',
                paddingBottom: 5,
        },
        dateContainer: {
                flexDirection: 'row',
                // justifyContent: 'space-between',
                flexShrink: 1,
                alignItems: 'center',
                paddingRight: 20,
        },
        listTime: {
                fontWeight: '400',
                color: '#666',
                fontSize: 12,
        },
        optionsIcon: {
                height: 24,
                width: 24,
                // position: "absolute",
                right: 9,
                top: 28
        },
});

export default styles;
