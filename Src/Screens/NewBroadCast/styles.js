import { StyleSheet } from 'react-native';
import { consts } from '../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
        mainContainer: {
                flex: 1,
                height: consts.ScreenWidth * 0.024,
                backgroundColor: "white"
        },
        callerDetailsContainer: {
                flex: 4,
                justifyContent: 'center',

        },
        callerDetailsContainerWrap: {
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
        },
        nameContainer: {
                // alignItems: 'center',
                // flexDirection: 'row',
                justifyContent: "flex-start",
                flex: 4,
        },
        headerContainer: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#075e54',
                alignItems: 'center',
                paddingRight: 5,
        },
        leftHeaderContainer: {
                alignItems: 'flex-start',
                flexDirection: 'row',
        },
        rightHeaderContainer: {
                alignItems: 'flex-end',
                flexDirection: 'row',
        },
        contentContainer: {
                flex: 6,
                // backgroundColor: "pink"
        },
        logoText: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                alignItems: 'flex-start',
                marginLeft: 10,
        },
        listItemContainer: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
        },
        statuslistItemContainer: {
                flex: 2,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
        },
        iconContainer: {
                // flex: 1,
                // alignItems: 'flex-start',
                // alignItems: "center",
                justifyContent: "center",
                // // paddingRight: 20,
                // backgroundColor: 'pink',

                borderRadius: 40,
                width: 40,
                height: 40,
                backgroundColor: "#25d366",
                alignItems: "center",
                marginRight: 20
        },
        specialIcon: {
                borderRadius: 30,
                width: 60,
                height: 60,
                backgroundColor: "#25d366",
                alignItems: "center",
                justifyContent: "center"

        },
        // specialIconContainer: {
        //         borderRadius: 30,
        //         width: 60,
        //         height: 60,
        //         backgroundColor: "#25d366",
        //         alignItems: "center",
        //         justifyContent: "center"

        // },



        dateContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
        },
        callIconContainer: {
                flex: 1,
                alignItems: 'flex-end',
        },
        initStyle: {
                borderRadius: 30,
                width: 60,
                height: 60,
                // backgroundColor: "green"
        },
        newtime: {
                color: '#25d366',
                // color: 'red',
                // '#ed788b' : '#075e54'
        },
        numberCount: {
                color: 'white',
                // color: 'red',
                // '#ed788b' : '#075e54'
        },
        numbercountContainer: {
                backgroundColor: '#25d366',
                height: 20,
                width: 20,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center"
        },
        text: {
                fontSize: consts.textSizes(13),
                color: "grey",
                textAlign: "center",
                paddingHorizontal: 15
        },
        textContainer: {
                backgroundColor: "white",
                borderBottomColor: 'rgba(92,94,94,0.5)',
                borderBottomWidth: 0.25,
                paddingVertical: 15
        }
});

export default styles;
