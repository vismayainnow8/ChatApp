import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: consts.ScreenWidth * 0.05,
    backgroundColor: 'white',
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  detailedcallerDetailsContainer: {
    flex: 7,
    justifyContent: 'center',
    // borderBottomColor: 'rgba(92,94,94,0.5)',
    // backgroundColor: "red"
    // borderBottomWidth: 0.25,
  },
  detailedlistItemContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 25,
    // paddingVertical: 20,
    // backgroundColor: "green",
    // margin: 10
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    marginVertical: 5,
    paddingBottom: 10,
  },
  flagContainer: {
    flex: 0.6,
    alignItems: 'flex-start',
    // backgroundColor: "yellow"
  },
  numberContainer: {
    flex: 1,
    alignItems: 'flex-start',
    // backgroundColor: "pink"
  },
  tickContainer: {
    flex: 0.5,
    alignItems: 'flex-start',
    // backgroundColor: "yellow"
  },
  nameText: {
    fontSize: consts.textSizes(14),
  },
  statusText: {
    fontSize: consts.textSizes(12),
    color: 'grey',
  },
  detailednameContainer: {
    // backgroundColor: "red",
    flex: 3,
  },
});
export default styles;
