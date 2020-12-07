import { consts } from '../../Assets/Consts';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
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
        textContainer: {
                flex: 6,
                // backgroundColor: "green"
        },

        image: {
                height: consts.ScreenWidth * 0.4,
                width: consts.ScreenWidth * 0.4,
                borderRadius: consts.ScreenWidth * 0.2
        },
        editNameContainer: {
                backgroundColor: "white",
                flexDirection: "row",
                paddingVertical: 15,
        },
        icon: {
                paddingRight: 15
        },
        text: {
                fontSize: consts.textSizes(14),
                color: "black",
                paddingBottom: 5
        },
        heading: {
                fontSize: consts.textSizes(12),
                color: "grey",
        },
        itemContainer: {
                borderBottomColor: 'rgba(92,94,94,0.5)',
                borderBottomWidth: 0.25,
        },
        cameraIconContainer: {
                backgroundColor: "#075e54",
                position: "absolute",
                zIndex: 1000,
                right: consts.ScreenWidth / 3,
                bottom: consts.ScreenHeight / 1.75,
                height: 50,
                width: 50,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center"
        }

});
export default styles;