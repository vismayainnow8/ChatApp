import {StyleSheet} from 'react-native';
import {consts} from '../../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
      },
      topContainer: {
        // backgroundColor: "blue",
        borderBottomWidth: 0.6,
        borderColor: "black",
        height: 50,
        width: "100%",
        position: "absolute",
        top: 0,
        paddingHorizontal: 5,
        justifyContent:"center"
      },
      bottomContainer: {
        // backgroundColor: "#A0A0A0",
        shadowColor: 'red',
        shadowOpacity: 0.8,
        // shadowRadius: 1,  
        elevation: 5,
        borderTopWidth: 0.6,
        borderColor: "black",
        height: 50,
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 5,
        justifyContent:"center"
      },
      contactsbuttonContainer: {
        bottom: 23,
        right: 10,
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#128C7E',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textInputContainer: {
        color:'white'
      },
      placeholderStyle:{
        fontSize: 20,
        color:"white",
      },
      imageBackgroundstyle:{
        height: '100%',
         width: '100%'
      },
      ionIconsStyle:{
        padding: 5,
      },
});

export default styles;
