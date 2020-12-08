import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';
const styles = StyleSheet.create({
  countryContainer: {
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    width: '75%',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: consts.ScreenWidth * 0.08,
    paddingHorizontal: consts.ScreenWidth * 0.08,
    backgroundColor: 'white',
  },
  firstLine: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  secondContainer: {
    textAlign: 'center',
    width: '75%',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  countryCodeContainer: {
    textAlign: 'center',
    width: '25%',
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    marginRight: 15,
    justifyContent: 'center',
    paddingTop: 2,
  },
  phoneNumberContainer: {
    width: '69%',
    borderBottomWidth: 1,
    borderBottomColor: '#128c7e',
    paddingRight: 15,
  },
  plus: {
    color: 'grey',
    textAlign: "center",
    // paddingVertical: ss,
    paddingBottom: 20,
  },
  grey: {
    color: 'grey',
  },
  codeInputStyle: {
    borderBottomColor: "red",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderBottomColor: "red",
    // borderTopWidth:0,
    // borderLeftWidth:0,
    // borderRightidth:0,
    // borderBoottomWidth:1,
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: 'grey',
    textAlign: 'center',
    margin: 2,
    color: '#128c7e',
  },
  focusCell: {
    borderColor: '#128c7e',
    color: '#128c7e',
  },
  itemContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  iconContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 8,
  },
  timeContainer: {
    flex: 1,
  },
});
export default styles;
