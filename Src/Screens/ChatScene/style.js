import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
  time: {
    fontSize: 10,
  },
  textinputContainer: {
    backgroundColor: 'white',
    minHeight: 50,
    maxHeight: 150,
    width: '80%',
    borderRadius: 25,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    // borderWidth: 0.2,
    // borderColor: 'grey',
    fontSize: 25,
    // justifyContent: "center",
    // alignSelf: "flex-start"
  },
  sendContainer: {
    backgroundColor: '#128c7e',
    height: 50,
    width: 50,
    borderRadius: consts.ScreenHeight * 0.08,
    paddingLeft: 10,
    // alignItems: "center",

    justifyContent: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    // justifyContent: "space-evenly",
    paddingTop: 5,
    paddingBottom: 8,
    paddingHorizontal: 5,
    // backgroundColor: "pink"
  },
  contentContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 5,
    paddingBottom: 8,
    paddingHorizontal: 5,
    // backgroundColor: "pink",
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    // backgroundColor: "orange",
    // backgroundColor: '#F9F7C5',
    padding: consts.ScreenWidth * 0.02,
  },
  scrollViewContainer: {
    // justifyContent: "flex-end",
    // backgroundColor: "pink",
    flex: 1,
  },

  item: {
    margin: 5,
    // backgroundColor: "#dcf8c6",
    // width:""
    padding: 5,
    // alignSelf: "flex-end",
    borderRadius: 5,
  },
  emoji: {
    flex: 1.4,
    // alignSelf: "flex-start",
    // backgroundColor: "pink",
    justifyContent: 'center',
  },
  attach: {
    flex: 1,
    // alignSelf: "flex-start",
    // backgroundColor: "orange",
    justifyContent: 'center',
  },
  textinput: {
    flex: 6,
    // alignSelf: "flex-start",
    // backgroundColor: "blue"
  },
  camera: {
    flex: 1,
    // alignSelf: "flex-start",
    // backgroundColor: "green"
  },
});

export default styles;
