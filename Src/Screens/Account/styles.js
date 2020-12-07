import { StyleSheet } from 'react-native';
import { consts } from '../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
        mainContainer: {
                flex: 1,
                backgroundColor: 'white',
        },
        logoText: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                alignItems: 'flex-start',
                marginLeft: 10,
        },
        detailedlistItemContainer: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 25,
                paddingVertical: 20,
        },

        iconContainer: {
                flex: 1,
                alignItems: 'flex-start',
        },
        callerDetailsContainer: {
                flex: 4,
                justifyContent: 'center',
        },
        detailediconContainer: {
                flex: 1,
                alignItems: 'flex-start',
                // backgroundColor: "yellow"
        },
        detailedcallerDetailsContainer: {
                flex: 7,
                justifyContent: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
        },
        detailednameContainer: {
                alignItems: 'flex-start',
                flex: 1,
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
        nameText: {
                fontSize: consts.textSizes(14),
        }
});

export default styles;
