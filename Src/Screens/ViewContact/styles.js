import {StyleSheet,Dimensions} from 'react-native';
import { consts } from '../../Assets/Consts';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
 
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileImageContainer: {
    justifyContent:"flex-end",
    alignSelf: "center",
    // paddingLeft:40
  },
  container: {
    flex: 1,
    backgroundColor:"lightgray"

  },
  contentContainer: {
    flexGrow: 1,
    height: consts.ScreenHeight * 1.57,
    // backgroundColor:"pink"
    // pa
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,

  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'blue',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',

  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  body: {
    backgroundColor:"lightgray"
  },
  media: {
    backgroundColor:"white",
    padding: 20,
// marginTop:10,
marginBottom:15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mediaImage: {
    height: 100,
    width: 500,
    
  },
  mediaText: {
    color: '#128c7e',
    paddingBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  notificationContainer: {
    backgroundColor: "white",
    
  },
  muteContainer: {
    // paddingVertical: 15,
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey",
    
  },
  customContainer: {
    padding: 15,
    // paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor:"lightgrey"
  },
  mediaContainer: {
    padding: 15,
    // paddingVertical: 15,
  },
  phoneNumberSecondContainer: {
    flexDirection: "row",
    justifyContent:"space-between",
    // backgroundColor: "red",
    
  },
  blockContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    alignItems:"center"
    
  },
  phoneNumberContainer: {
    backgroundColor: "white",
    padding: 15,
    marginVertical:15
  },
  statusHeader: {
    color: '#128c7e',
    paddingBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  statusText: {
    color: 'black',
    paddingVertical: 10,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  numberText: {
    color: 'black',
    paddingBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  blockText: {
    color: 'red',
    textAlign: "left",
    alignSelf: "flex-start"
  },
  nameText: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 10,
    paddingLeft: 15
  }
 

 

});
export default styles;
