import { StyleSheet } from 'react-native';
import { consts } from '../../Assets/Consts';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
  updateContainer: {
    padding: consts.ScreenWidth * 0.024,
    backgroundColor: '#E8E8E8',
  },
  grey: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  contactsbuttonContainer: {
    bottom: 20,
    right: 10,
    // position: 'absolute',
    margin: 5,
    borderRadius: 25,
    height: 48,
    width: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: '#25d366',
  },
  fabIcon: {
    margin: 12,
    height: 24,
    width: 24,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    right: 0
  },
  percentageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
  },
  percentage: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  listItemContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  initStyle: {
    borderRadius: 55,
    width: 55,
    height: 55,
  },
  numbercountContainer: {
    backgroundColor: '#25d366',
    height: 18,
    width: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  numberCount: {
    color: 'white',
    fontSize: consts.textSizes(20),
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  firstContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  secondContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    flexShrink: 1,
    alignItems: 'center',
    paddingRight: 20,
  },
  listTime: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  itemSeperatorContainer: {
    flexDirection: 'row',
  },
  seperatorTransparentPart: {
    width: 75,
  },
  seperator: {
    backgroundColor: 'lightgray',
    height: 0.25,
    flex: 1,
  },
});

export default styles;
