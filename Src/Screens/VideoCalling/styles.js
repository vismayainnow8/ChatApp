import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
  callerContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 3,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  callerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: consts.textSizes(25),
    paddingVertical: 15,
  },
  statusText: {
    color: 'white',
    textAlign: 'center',
  },
  volumeIconContainer: {
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  videocamIconContainer: {
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  microphoneIconContainer: {
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  iconStyle: {
    alignSelf: 'center',
  },
  eachIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
