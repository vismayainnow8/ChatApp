import {StyleSheet} from 'react-native';
import {consts} from '../../Assets/Consts';
const styles = StyleSheet.create({
  countryContainer: {
    borderBottomColor: '#128c7e',
    paddingBottom: 5,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '75%',
  },
  countryCodeContainer: {
    textAlign: 'center',
    width: '25%',
    borderBottomColor: '#128c7e',
    marginRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  phoneNumberContainer: {
    width: '69%',
    // borderBottomWidth: 1,
    borderBottomColor: '#128c7e',
    // paddingRight: 15,

    paddingVertical: 0,
  },
  secondContainer: {
    textAlign: 'center',
    width: '75%',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: consts.ScreenWidth * 0.08,
    paddingHorizontal: consts.ScreenWidth * 0.01,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  firstLine: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  firstBlueLine: {
    textAlign: 'center',
    paddingBottom: 10,
    color: '#34b7f1',
  },

  plus: {
    color: 'grey',
  },
  labelStyle: {
    color: 'white',
  },
  style: {
    marginTop: 150,
  },
});
export default styles;
