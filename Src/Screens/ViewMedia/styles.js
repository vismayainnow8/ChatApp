import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00000030',
  },
  screen: {
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loader: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default styles;
