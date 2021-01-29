import { StyleSheet, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#00000000',
  },
  container: {
    flex: 1,
    minHeight: SCREEN_HEIGHT,
    backgroundColor: 'lightgray',
    // backgroundColor: 'green',
  },
  innerContainer: {
    flex: 1,
    minHeight: SCREEN_HEIGHT,
    backgroundColor: 'lightgray',
    // backgroundColor: 'red',

  },
  contentContainer: {
    flexGrow: 1,
  },
  phoneNumberGroupContainer: {
    flexDirection: "row",
    // justifyContent:"center"
    alignItems: "center",
    marginVertical: 10
  },
  avatarContainer: {
    justifyContent: 'center',
    borderRadius: 30,
    width: 39,
    height: 39,
    marginVertical: 8,
    backgroundColor: '#D9E3E2',
    alignItems: 'center',
    marginRight: 15

  },
  avatar: {
    borderRadius: 30,
    width: 39,
    height: 39,
    marginRight: 15

  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 17.5,
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 55,
    fontSize: 20,
  },
  topbar: {
    paddingLeft: 15,
    paddingTop: 15,
  },
  phoneNumberContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
  },
  statusHeader: {
    color: '#128c7e',
    paddingBottom: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  statusText: {
    color: 'black',
    paddingVertical: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  phoneNumberSecondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberText: {
    color: 'black',
    paddingBottom: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  blockContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
  },
  blockText: {
    color: 'red',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
});
export default styles;
