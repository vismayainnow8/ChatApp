import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  callerDetailsContainerWrap: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 4,
    justifyContent: 'center',
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
  searchBarStyle: {
    // position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    width: '100%',
    height: 44,
    backgroundColor: 'white',
  },
  iconContainer: {
    justifyContent: 'center',
    borderRadius: 40,
    width: 40,
    height: 40,
    backgroundColor: '#25d366',
    alignItems: 'center',
    marginRight: 20,
  },
  iconContainerWoColor: {
    justifyContent: 'center',
    borderRadius: 40,
    width: 40,
    height: 40,
    alignItems: 'center',
    marginRight: 20,
  },

  iconContainerTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  numberCount: {
    color: 'white',
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
  initStyle: {
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  featherStyle: {
    paddingRight: 20,
  },
  searchStyle: {
    width: consts.ScreenWidth / 1.35,
  },
  entypoStyle: {
    paddingLeft: 15,
  },
  searchView: {
    flexDirection: 'row',
  },
  searchMaterialIcon: {
    paddingRight: 15,
  },
  refreshMaterialIcon: {
    paddingRight: 15,
  },
  newGroupText: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  newContactText: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  activityIndicator: {
    height: 50,
    alignSelf: 'center',
  },
  phoneNumberText: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
});

export default styles;
