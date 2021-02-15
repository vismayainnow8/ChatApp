import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, SectionList, Text, TouchableOpacity, View } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Circle } from 'react-native-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { BASE_STATUSES_SECTIONLIST_STRUCTURE } from '../../Assets/Consts';
import { Screen, EmptyListComponent } from '../../Components';
import { searchBarVisible, search } from '../../StateManagement/Actions';
import { StatusListImage } from './components/StatusListImage';
import styles from './styles';

const Status = ({ navigation, route, ...props }) => {
  const store = useStore();
  const dispatch = useDispatch();
  const [statusData, setStatusData] = useState([]);
  const [statusSave, setStatusSave] = useState([]);
  const [galleryPicker, setGalleryPicker] = useState(false);
  const [cameraPicker, setCameraPicker] = useState(false);
  const [myStatus, setMyStatus] = useState(myStatusData());
  const [uploading, setUploading] = useState({ status: false, fileNumber: '' });
  var keyword = useSelector((state) => state.search.search);

  const selector = (state) =>
    statusData.reduce(
      (prev, data) =>
        reduceFunctionForStatusCategorising(state.viewedStatuses, prev, data),
      BASE_STATUSES_SECTIONLIST_STRUCTURE(),
    );
  const sectionListData = useSelector(selector);



  useEffect(() => {
    return firestore()
      .collection('Statuses')
      .where('contacts', 'array-contains', auth().currentUser.uid)
      .onSnapshot(
        (res) => {
          let data = [];
          let myData = [];
          res.forEach((item) => {
            let formatedItem = item.data();
            formatedItem.data.id = item.id;
            if (formatedItem.user.uid == auth().currentUser.uid) {
              myData.push(formatedItem);
            } else {
              data.push(formatedItem);
            }
          });
          formatAndSetMyStatusData(myData);
          setStatusSave(formatStatusesData(data));
          setStatusData(formatStatusesData(data));
          // setStatusData(formatStatusesData(DATA2));
        },
        (error) => { },
      );
  }, []);

  useEffect(() => {
    let User = statusData.filter(function (e) {
      return e.displayName.indexOf(keyword) > -1
    });
    if (!User.length || !keyword) {
      console.log('empty')
      setStatusData(statusSave)
    }
    else {
      setStatusData(User)
      console.log('valid')

    }
  }, [keyword])

  const formatAndSetMyStatusData = (myData) => {
    myData = formatStatusesData(myData);
    const data = myStatusData();
    data.data = myData;
    setMyStatus(data);
  };

  const onPressStatus = () => {
    !uploading && openCamera();
  };

  const openGalleryPicker = () => {
    ImageCropPicker.openPicker({
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
      mediaType: 'image',
      cropping: true,
      // multiple: true,
    })
      .then(
        uploadPhoto,
        setGalleryPicker(true)
      )
      .catch((error) => console.log('error', error));
  };

  const openCamera = () => {
    ImageCropPicker.openCamera({
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
      mediaType: 'image',
      cropping: true,
    })
      .then(uploadPhoto,
        setCameraPicker(true)
      )
      .catch((error) => console.log('error', error));
  };

  const uploadPhoto = async (photo) => {
    const contacts = Object.keys(store.getState().contacts.contacts);
    console.log('contacts', contacts)
    const { photoURL, uid, displayName, phoneNumber } = auth().currentUser;
    contacts.push(uid);
    const user = { photoURL, uid, displayName, phoneNumber };
    let status = {
      data: {},
      contacts,
      user,
    };
    setUploading({ status: 0.01, fileNumber: 1 });
    status.data.uri = await uploadImageAsPromise(photo);
    status.data.type = photo.mime.split('/')[0];
    status.data.time = firestore.Timestamp.now().toMillis();
    console.log('status', status)
    addStatus(status);
  };

  const addStatus = (status) => {
    firestore().collection('Statuses').add(status);
  };

  const uploadImageAsPromise = async (image) => {
    return new Promise((resolve, reject) => {
      const imageStorageRef = storage().ref(
        'images/statuses/' + uuidv4() + '.jpeg',
      );
      const task = imageStorageRef.putFile(image.path);

      task.on(
        'state_changed',
        (taskSnapshot) => {
          const fraction =
            taskSnapshot.bytesTransferred / taskSnapshot.totalBytes;
          setUploading((data) => ({
            ...data,
            status: fraction > 0 ? fraction : 0.01,
          }));
        },
        (err) => {
          console.log(err);
          reject(err);
        },
        async () => {
          setUploading({ status: false, fileNumber: '' });
          const downloadURL = await imageStorageRef.getDownloadURL();
          resolve(downloadURL);
        },
      );
    });
  };

  const renderSeparator = () => {
    return (
      <View style={styles.itemSeperatorContainer}>
        <View style={styles.seperatorTransparentPart} />
        <View style={styles.seperator} />
      </View>
    );
  };

  const renderHeader = () => {
    if (myStatus?.data[0]?.statuses?.length) {
      const item = myStatus.data[0];
      return <Item item={item} time={item.time} index={0} section={myStatus} />;
    } else {
      return (
        <TouchableOpacity
          style={styles.listItemContainer}
          onPress={() => onPressStatus()}>
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: auth().currentUser.photoURL,
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
    }
  };
  const reloadOnNavigate = () => {
    dispatch(search(null))
    setStatusData(statusSave)
  }
  return (
    <Screen style={styles.screen}>
      {/* {sectionListData ? */}
      <SectionList
        sections={sectionListData}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.uid.toString()}
        renderItem={({ item, index, section }) => (
          <Item item={item} time={item.time} index={index} section={section} reloadOnNavigate={() => reloadOnNavigate()} />
        )}
        ItemSeparatorComponent={renderSeparator}
        renderSectionHeader={({ section: { title } }) => (

          //  { sectionListData.data?<View style={styles.updateContainer}>
          //     <Text style={styles.grey}>{title}</Text>
          // </View> : null}
          <View style={styles.updateContainer}>
            <Text style={styles.grey}>{title}</Text>
          </View>
        )}
      />
      {/* :null} */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.contactsbuttonContainer}>
          {galleryPicker && uploading.status ? (
            <Circle progress={uploading.status} size={48} color="white">
              <View style={styles.percentageContainer}>
                <Text style={styles.percentage}>
                  {Math.ceil(uploading.status * 100)}%
              </Text>
                <Text style={styles.percentage}>of {uploading.fileNumber}</Text>
              </View>
            </Circle>
          ) : (

              <MaterialIcons name="photo" color="white" size={25}
                style={styles.fabIcon} onPress={openGalleryPicker} />

            )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactsbuttonContainer}>
          {cameraPicker && uploading.status ? (
            <Circle progress={uploading.status} size={48} color="white">
              <View style={styles.percentageContainer}>
                <Text style={styles.percentage}>
                  {Math.ceil(uploading.status * 100)}%
              </Text>
                <Text style={styles.percentage}>of {uploading.fileNumber}</Text>
              </View>
            </Circle>
          ) : (

              <MaterialCommunityIcons name="camera" color="white" size={24}
                style={styles.fabIcon} onPress={openCamera} />

            )}
        </TouchableOpacity>

      </View>

    </Screen>
  );
};

export default Status;

const Item = ({ item, index, reloadOnNavigate, section }) => {
  const { time, statuses } = item;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigateViewStatus = () => {
    // reloadOnNavigate()
    dispatch(searchBarVisible(false))
    navigation.navigate('ViewStatus', { section, index })
  }
  return (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => navigateViewStatus()}>
      <View style={styles.iconContainer}>
        <StatusListImage data={statuses} />
      </View>

      <View style={styles.messageContainer}>
        <View style={styles.firstContainer}>
          <Text>{item.displayName}</Text>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.dateContainer}>
            <Text numberOfLines={1} style={styles.listTime}>
              {moment(time).format('D MMM YYYY h:mm a')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const reduceFunctionForStatusCategorising = (viewedStatuses, prev, data) => {
  const statuses = data.statuses.map((status) => ({
    ...status,
    seen: (viewedStatuses[data.uid] ?? []).includes(status.id),
  }));
  statuses.sort((a, b) => {
    if (a.seen ^ b.seen) {
      return b.seen && 1;
    } else {
      return a.time - b.time;
    }
  });
  const isAllSeen = statuses.every((status) => status.seen);
  if (isAllSeen) {
    prev[1].data.push({ ...data, statuses });
  } else {
    prev[0].data.push({ ...data, statuses });
  }
  return prev;
};

function formatStatusesData(statuses) {
  console.log('formatStatusesData', statuses)
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

const myStatusData = () => {
  return {
    id: auth().currentUser.uid,
    title: 'My Status',
    data: [
      {
        statuses: [],
      },
    ],
  };
};
