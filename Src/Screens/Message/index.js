import React from 'react';
import {Text, FlatList, Image, View, StatusBar} from 'react-native';
import styles from './styles';
const DATA = [
  {
    id: 1,
    first_name: 'Glenn',
    mobile: true,
    message: 'Hey there! I am using WhatsApp',
    date: '22-Mar-2016',
    time: '5:46 PM',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    number: 1,
  },
  {
    id: 2,
    first_name: 'Carl',
    mobile: false,
    message: 'Do you smell what the rock is cooking?',
    date: '22-Feb-2016',
    time: '09:38 PM',
    image: 'https://randomuser.me/api/portraits/women/37.jpg',
    number: 2,
  },
  {
    id: 3,
    first_name: 'Rick',
    mobile: true,
    message: "Hello there it's been a while. Not much",
    date: '01-Jul-2016',
    time: '1:33 PM',
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    number: 3,
  },
  {
    id: 4,
    first_name: 'Maggie',
    mobile: false,
    message: 'Oh Baby, baby baby... my baby baby',
    date: '19-Feb-2016',
    time: '02:59 AM',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    number: 4,
  },
  {
    id: 5,
    first_name: 'Michael',
    mobile: true,
    message: 'Extreme fishing with Robson green',
    date: '12-Aug-2016',
    time: '9:17 AM',
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    number: 5,
  },
  {
    id: 6,
    first_name: 'Jesus',
    mobile: false,
    message: "Why do people care about marcos' burial in LBNM",
    date: '13-Aug-2016',
    time: '10:37 PM',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    number: 6,
  },
  {
    id: 7,
    first_name: 'Daryn',
    mobile: true,
    message: 'Simply amazing, brilliant and absolutely fantastic',
    date: '17-Nov-2016',
    time: '07:32 AM',
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
    number: 7,
  },
  {
    id: 8,
    first_name: 'Fred',
    mobile: false,
    message: 'Saw you this morning and i wake up shitty.',
    date: '29-Nov-2016',
    time: '12:56 AM',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
    number: 8,
  },
  {
    id: 9,
    first_name: 'James',
    mobile: false,
    message: 'I will never walk alone',
    date: '27-Dec-2016',
    time: '9:29 PM',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    number: 9,
  },
  {
    id: 10,
    first_name: 'Matthew',
    mobile: true,
    message: 'Got it',
    date: '31-Dec-2016',
    time: '7:43 PM',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    number: 10,
  },
];

const Message = () => {
  // const [loaded, setLoaded] = useState(false);

  const Item = ({image, first_name, time}) => (
    <View style={styles.listItemContainer}>
      <View style={styles.iconContainer}>
        <Image
          source={{uri: image}}
          style={styles.initStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.callerDetailsContainer}>
        <View style={styles.callerDetailsContainerWrap}>
          <View style={styles.nameContainer}>
            <Text>{first_name}</Text>
            <View style={styles.dateContainer}>
              <Text
                numberOfLines={1}
                style={{fontWeight: '400', color: '#666', fontSize: 12}}>
                Today, {time}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
  function renderItem({item, index}) {
    return (
      <Item
        item={item}
        image={item.image}
        first_name={item.first_name}
        missed={item.missed}
        time={item.time}
        date={item.date}
        message={item.message}
        number={item.number}
      />
    );
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <View style={styles.contentContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Message;
