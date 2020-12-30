import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';

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
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#25d366',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 10,
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
    fontSize: consts.textSizes(10),
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
