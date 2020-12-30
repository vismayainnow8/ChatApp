import {StyleSheet, Dimensions} from 'react-native';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#00000000',
  },
  container: {
    flex: 1,
    minHeight: SCREEN_HEIGHT,
    backgroundColor: 'lightgray',
  },
  contentContainer: {
    flexGrow: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 17.5,
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
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
