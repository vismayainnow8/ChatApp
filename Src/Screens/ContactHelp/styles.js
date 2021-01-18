import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
    // height: consts.ScreenWidth * 0.024,
    paddingHorizontal: consts.ScreenWidth * 0.024,
    paddingVertical: consts.ScreenWidth * 0.02,
  },
  detailednameContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 7,
    // paddingLeft:
  },

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
    paddingHorizontal: 15,
    padding: 10,
  },
  detailedlistItemContainer: {
    flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    // backgroundColor: "pink"
  },
  statuslistItemContainer: {
    flex: 2,
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
    // borderBottomColor: 'rgba(92,94,94,0.5)',
    // backgroundColor: "red"
    // borderBottomWidth: 0.25,
  },
  detailediconContainer: {
    flex: 1,
    alignItems: 'flex-start',
    // backgroundColor: "yellow"
  },

  nameContainer: {
    alignItems: 'flex-start',
    flex: 1,
    paddingLeft: 20,
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
  specialIcon: {
    borderRadius: 30,
    width: 60,
    height: 60,
    backgroundColor: '#25d366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialIconContainer: {
    borderRadius: 30,
    width: 60,
    height: 60,
    backgroundColor: '#25d366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: consts.textSizes(15),
    color: 'black',
    paddingVertical:10
  },
  statusText: {
    fontSize: consts.textSizes(12),
    color: 'grey',
  },
});

export default styles;
