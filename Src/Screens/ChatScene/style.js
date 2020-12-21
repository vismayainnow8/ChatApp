import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    padding: 5,
    width: '100%',
  },
  inputContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  hasReplyMessage: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  replyContainer: {
    borderLeftWidth: 3,
    borderColor: 'red',
    borderRadius: 3,
    backgroundColor: '#f7f7f7',
    margin: 7,
    padding: 7,
  },
  replyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  replyHeaderText: {
    marginRight: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  closeReply: {
    position: 'absolute',
    top: -15,
    right: -15,
    padding: 12,
  },
  replyMessage: {
    fontSize: 12,
    color: 'grey',
  },
  textInputContainer: {
    // backgroundColor: 'white',
    maxHeight: 150,
    // flex: 1,
    // borderRadius: 25,
    flexDirection: 'row',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.0,
    // elevation: 1,
  },
  emoji: {
    alignSelf: 'flex-end',
    padding: 13,
  },
  textinput: {
    flex: 1,
    minHeight: 28,
    marginRight: 10,
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
});

export default styles;
