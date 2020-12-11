import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    padding: 5,
    width: '100%',
  },
  textinputContainer: {
    backgroundColor: 'white',
    maxHeight: 150,
    flex: 1,
    borderRadius: 25,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  emoji: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  textinput: {
    minHeight: 28,
    marginVertical: 10,
    paddingVertical: 0,
  },
  sendContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#128c7e',
    paddingVertical: 12,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 9,
    marginLeft: 5,
    height: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: consts.ScreenWidth * 0.02,
  },
  scrollViewContainer: {
    flex: 1,
  },

  chatNode: {
    maxWidth: '80%',
    marginVertical: 5,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  chatNodeTime: {
    alignSelf: 'flex-end',
    color: '#777',
    fontSize: 10,
  },
  attach: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
});

export default styles;
