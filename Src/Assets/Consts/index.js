import {Dimensions, PixelRatio} from 'react-native';

export const consts = {
  Name: 'Cardamom',
  ScreenWidth: Dimensions.get('window').width,
  ScreenHeight: Dimensions.get('window').height,
  textSizes: (x) => x / PixelRatio.getFontScale(),
};

export default consts;
export * from './countryList';

export const BASE_STATUSES_SECTIONLIST_STRUCTURE = () => [
  {
    id: 1,
    title: 'Recent Updates',
    data: [],
  },
  {
    title: 'Viewed Updates',
    id: 2,
    data: [],
  },
];

export const DATA2 = [
  {
    data: {
      id: '1',
      uri:
        'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg',
      time: 1609324897235,
      type: 'image',
    },
    user: {
      uid: '1',
      displayName: 'Glenn',
      photoURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
  {
    data: {
      id: '2',
      uri:
        'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
      time: 1609324907235,
      type: 'image',
    },
    user: {
      uid: '1',
      displayName: 'Glenn',
      photoURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
  {
    data: {
      id: '3',
      uri:
        'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
      time: 1609324917235,
      type: 'image',
    },
    user: {
      uid: '1',
      displayName: 'Glenn',
      photoURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
  {
    data: {
      id: '4',
      uri:
        'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
      time: 1609324927235,
      type: 'image',
    },
    user: {
      uid: '1',
      displayName: 'Glenn',
      photoURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
  {
    data: {
      id: '5',
      uri:
        'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
      time: 1609324937235,
      type: 'image',
    },
    user: {
      uid: '1',
      displayName: 'Glenn',
      photoURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },

  {
    data: {
      id: '6',
      uri:
        'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg',
      time: 1609324897235,
      type: 'image',
    },
    user: {
      uid: '2',
      displayName: 'Carl',
      photoURL: 'https://randomuser.me/api/portraits/women/37.jpg',
    },
  },
  {
    data: {
      id: '7',
      uri:
        'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
      time: 1609324907235,
      type: 'image',
    },
    user: {
      uid: '2',
      displayName: 'Carl',
      photoURL: 'https://randomuser.me/api/portraits/women/37.jpg',
    },
  },
  {
    data: {
      id: '8',
      uri:
        'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
      time: 1609324917235,
      type: 'image',
    },
    user: {
      uid: '2',
      displayName: 'Carl',
      photoURL: 'https://randomuser.me/api/portraits/women/37.jpg',
    },
  },
  {
    data: {
      id: '9',
      uri:
        'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
      time: 1609324927235,
      type: 'image',
    },
    user: {
      uid: '2',
      displayName: 'Carl',
      photoURL: 'https://randomuser.me/api/portraits/women/37.jpg',
    },
  },
  {
    data: {
      id: '10',
      uri:
        'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
      time: 1609324937235,
      type: 'image',
    },
    user: {
      uid: '2',
      displayName: 'Carl',
      photoURL: 'https://randomuser.me/api/portraits/women/37.jpg',
    },
  },

  {
    data: {
      id: '11',
      uri:
        'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg',
      time: 1609324897235,
      type: 'image',
    },
    user: {
      uid: '3',
      displayName: 'Rick',
      photoURL: 'https://randomuser.me/api/portraits/women/13.jpg',
    },
  },
  {
    data: {
      id: '12',
      uri:
        'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
      time: 1609324907235,
      type: 'image',
    },
    user: {
      uid: '3',
      displayName: 'Rick',
      photoURL: 'https://randomuser.me/api/portraits/women/13.jpg',
    },
  },
  {
    data: {
      id: '13',
      uri:
        'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
      time: 1609324917235,
      type: 'image',
    },
    user: {
      uid: '3',
      displayName: 'Rick',
      photoURL: 'https://randomuser.me/api/portraits/women/13.jpg',
    },
  },
  {
    data: {
      id: '14',
      uri:
        'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
      time: 1609324927235,
      type: 'image',
    },
    user: {
      uid: '3',
      displayName: 'Rick',
      photoURL: 'https://randomuser.me/api/portraits/women/13.jpg',
    },
  },
  {
    data: {
      id: '15',
      uri:
        'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
      time: 1609324937235,
      type: 'image',
    },
    user: {
      uid: '3',
      displayName: 'Rick',
      photoURL: 'https://randomuser.me/api/portraits/women/13.jpg',
    },
  },

  {
    data: {
      id: '16',
      uri:
        'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg',
      time: 1609324897235,
      type: 'image',
    },
    user: {
      uid: '4',
      displayName: 'Max',
      photoURL: 'https://randomuser.me/api/portraits/women/15.jpg',
    },
  },
  {
    data: {
      id: '17',
      uri:
        'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
      time: 1609324907235,
      type: 'image',
    },
    user: {
      uid: '4',
      displayName: 'Max',
      photoURL: 'https://randomuser.me/api/portraits/women/15.jpg',
    },
  },
  {
    data: {
      id: '18',
      uri:
        'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
      time: 1609324917235,
      type: 'image',
    },
    user: {
      uid: '4',
      displayName: 'Max',
      photoURL: 'https://randomuser.me/api/portraits/women/15.jpg',
    },
  },
  {
    data: {
      id: '19',
      uri:
        'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
      time: 1609324927235,
      type: 'image',
    },
    user: {
      uid: '4',
      displayName: 'Max',
      photoURL: 'https://randomuser.me/api/portraits/women/15.jpg',
    },
  },
  {
    data: {
      id: '20',
      uri:
        'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
      time: 1609324937235,
      type: 'image',
    },
    user: {
      uid: '4',
      displayName: 'Max',
      photoURL: 'https://randomuser.me/api/portraits/women/15.jpg',
    },
  },

  {
    data: {
      id: '21',
      uri:
        'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg',
      time: 1609324897235,
      type: 'image',
    },
    user: {
      uid: '5',
      displayName: 'Eleven',
      photoURL: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
  },
  {
    data: {
      id: '22',
      uri:
        'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
      time: 1609324907235,
      type: 'image',
    },
    user: {
      uid: '5',
      displayName: 'Eleven',
      photoURL: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
  },
  {
    data: {
      id: '23',
      uri:
        'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
      time: 1609324917235,
      type: 'image',
    },
    user: {
      uid: '5',
      displayName: 'Eleven',
      photoURL: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
  },
  {
    data: {
      id: '24',
      uri:
        'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
      time: 1609324927235,
      type: 'image',
    },
    user: {
      uid: '5',
      displayName: 'Eleven',
      photoURL: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
  },
  {
    data: {
      id: '25',
      uri:
        'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
      time: 1609324937235,
      type: 'image',
    },
    user: {
      uid: '5',
      displayName: 'Eleven',
      photoURL: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
  },

  {
    data: {
      id: '26',
      uri:
        'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg',
      time: 1609324897235,
      type: 'image',
    },
    user: {
      uid: '6',
      displayName: 'John',
      photoURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  },
  {
    data: {
      id: '27',
      uri:
        'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
      time: 1609324907235,
      type: 'image',
    },
    user: {
      uid: '6',
      displayName: 'John',
      photoURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  },
  {
    data: {
      id: '28',
      uri:
        'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
      time: 1609324917235,
      type: 'image',
    },
    user: {
      uid: '6',
      displayName: 'John',
      photoURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  },
  {
    data: {
      id: '29',
      uri:
        'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
      time: 1609324927235,
      type: 'image',
    },
    user: {
      uid: '6',
      displayName: 'John',
      photoURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  },
  {
    data: {
      id: '30',
      uri:
        'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
      time: 1609324937235,
      type: 'image',
    },
    user: {
      uid: '6',
      displayName: 'John',
      photoURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  },
  {
    data: {
      id: '31',
      uri:
        'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg',
      time: 1609324897235,
      type: 'image',
    },
    user: {
      uid: '7',
      displayName: 'Raj',
      photoURL: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  },
  {
    data: {
      id: '32',
      uri:
        'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
      time: 1609324907235,
      type: 'image',
    },
    user: {
      uid: '7',
      displayName: 'Raj',
      photoURL: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  },
  {
    data: {
      id: '33',
      uri:
        'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
      time: 1609324917235,
      type: 'image',
    },
    user: {
      uid: '7',
      displayName: 'Raj',
      photoURL: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  },
  {
    data: {
      id: '34',
      uri:
        'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
      time: 1609324927235,
      type: 'image',
    },
    user: {
      uid: '7',
      displayName: 'Raj',
      photoURL: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  },
  {
    data: {
      id: '35',
      uri:
        'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
      time: 1609324937235,
      type: 'image',
    },
    user: {
      uid: '7',
      displayName: 'Raj',
      photoURL: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  },
  {
    data: {
      id: '36',
      uri:
        'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg',
      time: 1609324897235,
      type: 'image',
    },
    user: {
      uid: '8',
      displayName: 'Ram',
      photoURL: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
  {
    data: {
      id: '37',
      uri:
        'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
      time: 1609324907235,
      type: 'image',
    },
    user: {
      uid: '8',
      displayName: 'Ram',
      photoURL: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
  {
    data: {
      id: '38',
      uri:
        'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
      time: 1609324917235,
      type: 'image',
    },
    user: {
      uid: '8',
      displayName: 'Ram',
      photoURL: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
  {
    data: {
      id: '39',
      uri:
        'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
      time: 1609324927235,
      type: 'image',
    },
    user: {
      uid: '8',
      displayName: 'Ram',
      photoURL: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
  {
    data: {
      id: '40',
      uri:
        'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
      time: 1609324937235,
      type: 'image',
    },
    user: {
      uid: '8',
      displayName: 'Ram',
      photoURL: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
  {
    data: {
      id: '41',
      uri:
        'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg',
      time: 1609324897235,
      type: 'image',
    },
    user: {
      uid: '9',
      displayName: 'Muhammed',
      photoURL: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  },
  {
    data: {
      id: '42',
      uri:
        'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
      time: 1609324907235,
      type: 'image',
    },
    user: {
      uid: '9',
      displayName: 'Muhammed',
      photoURL: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  },
  {
    data: {
      id: '43',
      uri:
        'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
      time: 1609324917235,
      type: 'image',
    },
    user: {
      uid: '9',
      displayName: 'Muhammed',
      photoURL: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  },
  {
    data: {
      id: '44',
      uri:
        'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
      time: 1609324927235,
      type: 'image',
    },
    user: {
      uid: '9',
      displayName: 'Muhammed',
      photoURL: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  },
  {
    data: {
      id: '45',
      uri:
        'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
      time: 1609324937235,
      type: 'image',
    },
    user: {
      uid: '9',
      displayName: 'Muhammed',
      photoURL: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  },
  {
    data: {
      id: '46',
      uri:
        'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg',
      time: 1609324897235,
      type: 'image',
    },
    user: {
      uid: '10',
      displayName: 'Singh',
      photoURL: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
  },
  {
    data: {
      id: '47',
      uri:
        'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
      time: 1609324907235,
      type: 'image',
    },
    user: {
      uid: '10',
      displayName: 'Singh',
      photoURL: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
  },
  {
    data: {
      id: '48',
      uri:
        'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
      time: 1609324917235,
      type: 'image',
    },
    user: {
      uid: '10',
      displayName: 'Singh',
      photoURL: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
  },
  {
    data: {
      id: '49',
      uri:
        'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
      time: 1609324927235,
      type: 'image',
    },
    user: {
      uid: '10',
      displayName: 'Singh',
      photoURL: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
  },
  {
    data: {
      id: '50',
      uri:
        'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
      time: 1609324937235,
      type: 'image',
    },
    user: {
      uid: '10',
      displayName: 'Singh',
      photoURL: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
  },
];
