import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: 'center',
    // borderBottomColor: 'rgba(92,94,94,0.5)',
    // borderBottomWidth: 0.25,
  },
  callerDetailsContainerWrap: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameContainer: {
    // alignItems: 'flex-start',
    flex: 4,
    justifyContent: 'center',
    // backgroundColor: "pink"
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
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'flex-start',
    marginLeft: 10,
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
    justifyContent: 'center',
    // // paddingRight: 20,
    // backgroundColor: 'pink',

    borderRadius: 40,
    width: 40,
    height: 40,
    backgroundColor: '#25d366',
    alignItems: 'center',
    marginRight: 20,
  },
  iconContainerWoColor: {
    // flex: 1,
    // alignItems: 'flex-start',
    // alignItems: "center",
    justifyContent: 'center',
    // // paddingRight: 20,
    // backgroundColor: 'pink',

    borderRadius: 40,
    width: 40,
    height: 40,
    // backgroundColor: "#25d366",
    alignItems: 'center',
    marginRight: 20,
  },

  iconContainerTop: {
    flex: 1,
    // alignItems: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#25d366",
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialIcon: {
    // borderRadius: 30,
    // width: 60,
    // height: 60,
    // backgroundColor: "#25d366",
    // alignItems: "center",
    // alignSelf: "center,"
  },
  
  specialIconContainer: {
    borderRadius: 30,
    width: 60,
    height: 60,
    backgroundColor: '#25d366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
  },
  listItemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconContainerperson: {
    justifyContent: 'center',
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: '#D9E3E2',
    alignItems: 'center',
    marginRight: 20,
  },
  rbsheetHeading: {
    fontSize: 15, 
    fontWeight:"bold",
    color: '#128c7e',  
  paddingBottom:25
  },
  
  fabIcon: {
    margin: 12,
    height: 24,
    width: 24,
  },
  initStyle: {
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  contactsbuttonContainer: {
    bottom: 20,
    right: 10,
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#25d366',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rooundButtonContainer: {
    bottom: 15,
    right: 10,
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#25d366',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    // backgroundColor:"yellow",
    height:45,
    width:consts.ScreenWidth/1.2,
    fontSize: consts.textSizes(15),
    // flex: 1,
    borderBottomColor: '#128c7e',
    borderBottomWidth: 2,
    paddingBottom: 0,}
});

export default styles;
