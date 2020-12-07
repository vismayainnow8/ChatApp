import { StyleSheet } from 'react-native';
import { consts } from '../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
        mainContainer: {
                flex: 1,
                // backgroundColor: '#F5FCFF',
                // height: consts.ScreenWidth * 0.024,
                paddingHorizontal: 24,
                paddingVertical: consts.ScreenWidth * 0.02,
        },
        detailedlistItemContainer: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                // paddingHorizontal: 25,
                paddingVertical: 20,
                // backgroundColor: "pink"
        },
        detailednameContainer: {
                alignItems: 'flex-start',
                flex: 7,
                // paddingLeft: 
        },
        headerContainer: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#075e54',
                alignItems: 'center',
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
                paddingHorizontal: 15,
                padding: 10,
        },

        statuslistItemContainer: {
                flex: 2,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
        },
        iconContainer: {
                flex: 1,
                alignItems: 'flex-start',
        },
        callerDetailsContainer: {
                flex: 4,
                justifyContent: 'center',
                // borderBottomColor: 'rgba(92,94,94,0.5)',
                // backgroundColor: "red"
                // borderBottomWidth: 0.25,
        },
        detailediconContainer: {
                flex: 1,
                alignItems: 'flex-start',
                // backgroundColor: "yellow"
        },


        nameContainer: {
                alignItems: 'flex-start',
                flex: 1,
                paddingLeft: 20
        },

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
        specialIcon: {
                borderRadius: 30,
                width: 60,
                height: 60,
                backgroundColor: "#25d366",
                alignItems: "center",
                justifyContent: "center"

        },
        specialIconContainer: {
                borderRadius: 30,
                width: 60,
                height: 60,
                backgroundColor: "#25d366",
                alignItems: "center",
                justifyContent: "center"

        },
        profileImage: {
                height: consts.ScreenWidth * 0.2,
                width: consts.ScreenWidth * 0.2,
                borderRadius: consts.ScreenWidth * 0.10,
        },
        nameText: {
                fontSize: consts.textSizes(13),
                color: "black"
        },
        blueText: {
                fontSize: consts.textSizes(13),
                color: "#34b7f1",
                paddingBottom: 20
        },
        statusText: {
                fontSize: consts.textSizes(12),
                color: "grey"
        },
        profileContainer: {
                flex: 1,
                alignItems: "center",
                paddingHorizontal: consts.ScreenWidth * 0.04,
                backgroundColor: "white",
                // backgroundColor: "pink"
        },
        imageContainer: {
                flex: 4,
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "red"
        },
        image: {
                height: consts.ScreenWidth * 0.4,
                width: consts.ScreenWidth * 0.4,
                borderRadius: consts.ScreenWidth * 0.2
        },
});

export default styles;
