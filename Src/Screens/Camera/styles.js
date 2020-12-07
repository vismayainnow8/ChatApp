import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: consts.ScreenWidth * 0.024,
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
  contentContainer: {},
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
    padding: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: 'center',
    borderBottomColor: 'rgba(92,94,94,0.5)',
    borderBottomWidth: 0.25,
  },
  nameContainer: {
    alignItems: 'flex-start',
    flex: 1,
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
    alignItems: 'center',
    justifyContent: 'center',
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
  detailedlistItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
    // backgroundColor: "pink"
  },
  detailedcallerDetailsContainer: {
    flex: 7,
    justifyContent: 'center',
    // borderBottomColor: 'rgba(92,94,94,0.5)',
    // backgroundColor: "red"
    // borderBottomWidth: 0.25,
  },
  callerDetailsContainerWrap: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalContainer: {
    right: 0,
    top: 0,
    position: 'absolute',
    height: consts.ScreenHeight / 2,
    width: consts.ScreenWidth / 2,
    backgroundColor: 'pink',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
    zIndex: 1000,
  },
});

export default styles;
