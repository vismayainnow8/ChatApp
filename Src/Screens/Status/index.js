import React, {useState} from 'react';
import {Text, TouchableOpacity, Image, View, SectionList} from 'react-native';
import {connect} from 'react-redux';
import {Screen} from '../../Components';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageCropPicker from 'react-native-image-crop-picker';
import styles from './styles';
import {DATA} from '../../Assets/Consts';
import {StatusListImage} from './components/StatusListImage';

const Status = ({navigation, route, ...props}) => {
  const [statusData] = useState(DATA);

  const onPressStatus = () => {
    if (props.imageUri != null) {
      navigation.navigate('ViewStatus', {statusData});
    } else {
      openCamera();
    }
  };

  const Item = ({item, index, section}) => (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => navigation.navigate('ViewStatus', {section, index})}>
      <View style={styles.iconContainer}>
        <StatusListImage photoURL={item.photoURL} data={item.statuses} />
      </View>

      <View style={styles.messageContainer}>
        <View style={styles.firstContainer}>
          <Text>{item.displayName}</Text>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.dateContainer}>
            <Text numberOfLines={1} style={styles.listTime}>
              {item.time}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

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

const mapStateToProps = (state, props) => {
  return {
    imageUri: state.imageUri.imageUri,
    imageUriArray: state.imageUriArray,
    ...props,
  };
};

export default connect(mapStateToProps, null)(Status);
