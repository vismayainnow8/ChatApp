import {consts} from '../../Assets/Consts';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: consts.ScreenWidth * 0.04,
    backgroundColor: 'white',
    // backgroundColor: "pink"
  },
  imageContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: consts.ScreenWidth,
    // backgroundColor: "pink"
  },
  textContainer: {
    flex: 6,
    width: consts.ScreenWidth,
    paddingHorizontal: 25,
    alignSelf:"center",
    // backgroundColor: "green"
  },
  image: {
    height: consts.ScreenWidth * 0.55,
    width: consts.ScreenWidth * 0.55,
    borderRadius: consts.ScreenWidth * 0.4,
  },
  imageBackground: {
    height: consts.ScreenWidth * 0.6,
    width: consts.ScreenWidth * 0.6,
    borderRadius: consts.ScreenWidth * 0.5,
    // backgroundColor: "yellow",
    alignItems: "center",
    // justifyContent:"center"
  },
  editNameContainer: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  icon: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: consts.textSizes(14),
    color: 'black',
    fontWeight:"bold",
    paddingBottom: 10,
  },
  heading: {
    fontSize: consts.textSizes(15),
    paddingBottom:10,
    color: 'grey',
  },
  itemContainer: {
    flexDirection: "row",
    // backgroundColor:"pink"
  },
  cameraIconContainer: {
    backgroundColor: '#075e54',
    // position: 'absolute',
    zIndex: 1000,
    left:40,
  bottom:50,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rbSheet: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    height:consts.ScreenHeight/4,
    alignItems:"center"
  },
  gridHeader: {
    marginBottom: 20,
    fontSize: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: "space-evenly",
    // backgroundColor:"yellow"
  },
  gridButtonContainer: {
    flexBasis: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridIcon: {
    fontSize: 30,
    color: '#666',
  },
  gridLabel: {
    fontSize: 14,
    paddingTop: 10,
    color: '#333',
  },
});
export default styles;
