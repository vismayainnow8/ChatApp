import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';
const styles = StyleSheet.create({
        mainContainer: {
                backgroundColor: 'white',
                flex: 1,
                paddingVertical: consts.ScreenHeight * 0.025,
                paddingHorizontal: consts.ScreenHeight * 0.025,
        },
        imageContainer: {
                // flex: 4,
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: "red"
        },
        line: {
                color: "grey",
                textAlign: "center",
                alignSelf: "center",
                paddingBottom:25
        },
        labelStyle: {
                color: 'white',
        },
        phoneNumberContainer: {
                width: '80%',
                // borderBottomWidth: 1,
        marginRight:20,
                borderBottomColor: '#128c7e',
                borderBottomWidth: 1,
                paddingBottom:0
                // paddingRight: 15,
                // backgroundColor:"red"
            
              },
        textinputContainer: {
                flexDirection: "row",
                justifyContent: "center",
                alignItems:"center"
        },
        
  image: {
        height: consts.ScreenWidth * 0.25,
        width: consts.ScreenWidth * 0.25,
          borderRadius: consts.ScreenWidth * 0.2,
          marginBottom:20
        
        },
        textinput: {
                minHeight: 28,
                // marginVertical: 10,
                paddingVertical: 0,
        },
        
});
export default styles;
