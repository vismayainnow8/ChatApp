import {Dimensions, PixelRatio} from 'react-native';

export const consts = {
  Name: 'Cardamom',
  ScreenWidth: Dimensions.get('window').width,
  ScreenHeight: Dimensions.get('window').height,
  textSizes: (x) => x / PixelRatio.getFontScale(),
};

export default consts;
