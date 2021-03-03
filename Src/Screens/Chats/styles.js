import { StyleSheet } from 'react-native';
import { consts } from '../../Assets/Consts';
// import { Appearance } from 'react-native'
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  contactsFab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#25d366',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  rbSheet: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    height: consts.ScreenHeight / 7,
    alignItems: "center",
    justifyContent: "center",
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 12,
  },
  gridHeader: {
    fontSize: 20,
    color: "#075e54"
  },
  iconContainerperson: {
    justifyContent: 'center',
    borderRadius: 30,
    width: 60,
    height: 60,
    margin: 10,
    backgroundColor: '#D9E3E2',
    alignItems: 'center',
    marginRight: 20,
  },
  initStyle: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  messageContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.25,
  },
  firstContainer: {
    flex: 1,
    marginRight: 25,
  },
  lastMessage: {
    paddingLeft: 10,
    color: '#666',
    fontSize: 12,
  },
  lastMessageStyle: {
    paddingLeft: 10,
    color: '#666',
    fontSize: 12,
    fontStyle: "italic"
  },
  dateContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  secondContainer: {
    paddingHorizontal: 5,
    alignItems: 'flex-end',
  },
  newtime: {
    color: 'grey',
    // color: '#25d366',
    fontSize: 10,
  },
  numbercountContainer: {
    backgroundColor: '#25d366',
    height: 18,
    width: 18,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberCount: {
    color: 'white',
    fontSize: 10,
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
    minHeight: 300,
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  nameContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
  callIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  detailedlistItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: 'pink',
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
