import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, Image, View, SectionList} from 'react-native';
import {useSelector} from 'react-redux';
import {Screen} from '../../Components';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageCropPicker from 'react-native-image-crop-picker';
import styles from './styles';
import {DATA2, BASE_STATUSES_SECTIONLIST_STRUCTURE} from '../../Assets/Consts';
import {StatusListImage} from './components/StatusListImage';
import {useNavigation} from '@react-navigation/native';

const Status = ({navigation, route, ...props}) => {
  const [statusData, setStatusData] = useState([]);
  const selector = (state) =>
    statusData.reduce(
      reduceFunctionForStatusCategorising(state),
      BASE_STATUSES_SECTIONLIST_STRUCTURE,
    );

  const sectionListData = useSelector(selector);

  useEffect(() => {
    const data = formatStatusesData(DATA2);
    setStatusData(data);
  }, []);

  const onPressStatus = () => {
    if (props.imageUri != null) {
      navigation.navigate('ViewStatus', {statusData});
    } else {
      openCamera();
    }
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
        sections={sectionListData}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.uid.toString()}
        renderItem={({item, index, section}) => (
          <Item item={item} time={item.time} index={index} section={section} />
        )}
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

export default Status;

const Item = ({item, index, section}) => {
  const {time, statuses} = item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => navigation.navigate('ViewStatus', {section, index})}>
      <View style={styles.iconContainer}>
        <StatusListImage photoURL={item.photoURL} data={statuses} />
      </View>

      <View style={styles.messageContainer}>
        <View style={styles.firstContainer}>
          <Text>{item.displayName}</Text>
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
};

function reduceFunctionForStatusCategorising(state) {
  return (prev, data) => {
    const statuses = data.statuses.map((status) => ({
      ...status,
      seen: (state.viewedStatuses[data.uid] ?? []).includes(status.id),
    }));
    const isAllSeen = statuses.every((status) => status.seen);
    if (isAllSeen) {
      prev[1].data.push({...data, statuses});
    } else {
      prev[0].data.push({...data, statuses});
    }
    return prev;
  };
}

function formatStatusesData(statuses) {
  const data = statuses.reduce((prev, newVal) => {
    const isNew = Boolean(!prev[newVal.user.uid]);
    if (isNew) {
      prev[newVal.user.uid] = {
        ...newVal.user,
        time: newVal.data.time,
        statuses: [newVal.data],
      };
    } else {
      prev[newVal.user.uid].statuses.push(newVal.data);
      prev[newVal.user.uid].time =
        prev[newVal.user.uid].time > newVal.data.time
          ? prev[newVal.user.uid].time
          : newVal.data.time;
    }
    return prev;
  }, {});
  const dataArray = Object.keys(data).map((key) => data[key]);
  return dataArray;
}
