import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: consts.ScreenHeight * 0.025,
    paddingHorizontal: consts.ScreenHeight * 0.025,
    alignItems: 'center',
  },
  imageBackgroundContainer: {
    height: consts.ScreenWidth * 0.25,
    width: consts.ScreenWidth * 0.25,
  },
  imageBackground: {
    borderRadius: consts.ScreenWidth * 0.2,
  },
  image: {
    borderRadius: consts.ScreenWidth * 0.2,
    height: consts.ScreenWidth * 0.25,
    width: consts.ScreenWidth * 0.25,
  },
  line: {
    color: 'grey',
    textAlign: 'center',
    alignSelf: 'center',
    paddingBottom: 25,
  },
  labelStyle: {
    color: 'white',
  },
  phoneNumberContainer: {
    width: '80%',
    // borderBottomWidth: 1,
    marginRight: 20,
    borderBottomColor: '#128c7e',
    borderBottomWidth: 1,
    paddingBottom: 0,
    // paddingRight: 15,
    // backgroundColor:"red"
  },
  textinputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    minHeight: 28,
    // marginVertical: 10,
    paddingVertical: 0,
  },
  rbSheet: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    height:consts.ScreenHeight/4,
    alignItems:"center"
  },
  gridHeader: {
    marginBottom: 20,
    fontSize: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: "space-evenly",
    // backgroundColor:"yellow"
  },
  gridButtonContainer: {
    flexBasis: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridIcon: {
    fontSize: 30,
    color: '#666',
  },
  gridLabel: {
    fontSize: 14,
    paddingTop: 10,
    color: '#333',
  },
});
export default styles;
