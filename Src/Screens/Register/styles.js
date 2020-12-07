import { StyleSheet } from 'react-native';
import { consts } from '../../Assets/Consts';
const styles = StyleSheet.create({
  ScrollViewContainer: {
    padding: 25,
    backgroundColor: '#EFF5FB',
  },
  container: {
    flex: 1,
    padding: consts.ScreenWidth * 0.1,
    marginTop:30
    // justifyContent: 'center',
    // alignItems: "center",

  },
  input: {
    marginVertical: 10,
    width: consts.ScreenWidth * 0.1,
    width: "100%",
    height: consts.ScreenHeight * 0.06,
    backgroundColor: "#F1F7F4",
    padding: 10,
    borderRadius: 10
  },
  errorMessage: {
    color: "red",
    // fontSize: 10,
    fontSize: consts.textSizes(12),

  },
  forgotPassword: {
    // color: "#E5E9E1",
    fontWeight: "bold"
  },
  loginButton: {
    backgroundColor: "#1ab394",

  },
  registerButton: {
    backgroundColor: "#17984C",
    marginTop: 25
  },
  Login: {
    fontWeight: "bold",
    // fontSize:25,
    fontSize: consts.textSizes(25),
    color:"#1ab394",
    marginBottom:20,
    alignSelf:"center"
  },
 


});
export default styles;