import React, {useState} from 'react';
import {Text, TouchableOpacity, Image, View, SectionList} from 'react-native';
import {connect} from 'react-redux';
import {Screen} from '../../Components';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import ImageCropPicker from 'react-native-image-crop-picker';
import styles from './styles';

const DATA = [
  {
    title: 'Recent Updates',
    data: [
      {
        id: 1,
        first_name: 'Glenn',
        mobile: true,
        message: 'Hey there! I am using WhatsApp',
        date: '22-Mar-2016',
        time: 'Yesterday 5:46 PM',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        number: 1,
      },
      {
        id: 2,
        first_name: 'Carl',
        mobile: false,
        message: 'Do you smell what the rock is cooking?',
        date: '22-Feb-2016',
        time: 'Yesterday 09:38 PM',
        image: 'https://randomuser.me/api/portraits/women/37.jpg',
        number: 2,
      },
      {
        id: 3,
        first_name: 'Rick',
        mobile: true,
        message: "Hello there it's been a while. Not much",
        date: '01-Jul-2016',
        time: 'Yesterday 1:33 PM',
        image: 'https://randomuser.me/api/portraits/women/13.jpg',
        number: 3,
      },
      {
        id: 4,
        first_name: 'Carl',
        mobile: false,
        message: 'Do you smell what the rock is cooking?',
        date: '22-Feb-2016',
        time: 'Yesterday 09:38 PM',
        image: 'https://randomuser.me/api/portraits/women/37.jpg',
        number: 2,
      },
      {
        id: 5,
        first_name: 'Rick',
        mobile: true,
        message: "Hello there it's been a while. Not much",
        date: '01-Jul-2016',
        time: 'Yesterday 1:33 PM',
        image: 'https://randomuser.me/api/portraits/women/13.jpg',
        number: 3,
      },
    ],
  },
  {
    title: 'Viewed Updates',
    data: [
      {
        id: 1,
        first_name: 'Glenn',
        mobile: true,
        message: 'Hey there! I am using WhatsApp',
        date: '22-Mar-2016',
        time: 'Yesterday 5:46 PM',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        number: 1,
      },
      {
        id: 2,
        first_name: 'Carl',
        mobile: false,
        message: 'Do you smell what the rock is cooking?',
        date: '22-Feb-2016',
        time: 'Yesterday 09:38 PM',
        image: 'https://randomuser.me/api/portraits/women/37.jpg',
        number: 2,
      },
      {
        id: 3,
        first_name: 'Rick',
        mobile: true,
        message: "Hello there it's been a while. Not much",
        date: '01-Jul-2016',
        time: 'Yesterday 1:33 PM',
        image: 'https://randomuser.me/api/portraits/women/13.jpg',
        number: 3,
      },
      {
        id: 4,
        first_name: 'Carl',
        mobile: false,
        message: 'Do you smell what the rock is cooking?',
        date: '22-Feb-2016',
        time: 'Yesterday 09:38 PM',
        image: 'https://randomuser.me/api/portraits/women/37.jpg',
        number: 2,
      },
      {
        id: 5,
        first_name: 'Rick',
        mobile: true,
        message: "Hello there it's been a while. Not much",
        date: '01-Jul-2016',
        time: 'Yesterday 1:33 PM',
        image: 'https://randomuser.me/api/portraits/women/13.jpg',
        number: 3,
      },
    ],
  },
];

const Status = (props) => {
  const [statusData, setStatusData] = useState(DATA);
  const navigation = useNavigation();

  const onPressStatus = () => {
    if (props.imageUri != null) {
      navigation.navigate('ViewStatus');
    } else {
      openCamera();
    }
  };

  const Item = ({image, first_name, time}) => (
    <TouchableOpacity
      style={styles.listItemContainer}
      // onPress={() => onPressed(item.first_name)}
      onPress={() => navigation.navigate('ViewStatus')}>
      <View style={styles.iconContainer}>
        <Image
          source={{uri: image}}
          style={styles.initStyle}
          resizeMode="contain"
        />
      </View>

      <View style={styles.messageContainer}>
        <View style={styles.firstContainer}>
          <Text>{first_name}</Text>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.dateContainer}>
            <Text numberOfLines={1} style={styles.listTime}>
              {time}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
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
  };

  const openCamera = () => {
    ImageCropPicker.openCamera({
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
      mediaType: 'image',
      cropping: true,
    })
      .then((photo) =>
        navigation.navigate('ImagePreview', {
          cameraImageUri: photo.path,
          time: new Date().toLocaleString(),
        }),
      )
      .catch((error) => console.log('error', error));
  };

  const renderSeparator = () => {
    return (
      <View style={styles.itemSeperatorContainer}>
        <View style={styles.seperatorTransparentPart} />
        <View style={styles.seperator} />
      </View>
    );
  };

  const renderHeader = (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => onPressStatus()}>
      <View style={styles.iconContainer}>
        <Image
          source={{
            uri: 'https://randomuser.me/api/portraits/men/1.jpg',
          }}
          style={styles.initStyle}
          resizeMode="contain"
        />
        <View style={styles.numbercountContainer}>
          <Text style={styles.numberCount}>+</Text>
        </View>
      </View>

      <View style={styles.messageContainer}>
        <View style={styles.firstContainer}>
          <Text>My Status</Text>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.dateContainer}>
            <Text numberOfLines={1} style={styles.listTime}>
              Tap to add status update
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Screen style={styles.screen}>
      <SectionList
        sections={statusData}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.updateContainer}>
            <Text style={styles.grey}>{title}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.contactsbuttonContainer}
        onPress={() => openCamera()}>
        <IconMaterialCommunityIcons
          name="camera"
          color="white"
          size={23}
          style={{padding: 5}}
        />
      </TouchableOpacity>
    </Screen>
  );
};

const mapStateToProps = (state, props) => {
  return {
    imageUri: state.imageUri.imageUri,
    imageUriArray: state.imageUriArray,
    ...props,
  };
};

export default connect(mapStateToProps, null)(Status);
