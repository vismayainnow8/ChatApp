import React from 'react';
import {Image, View} from 'react-native';

import Video from 'react-native-video';
import {Screen, Topbar} from '../../Components';
import {attachmentTypes} from '../ChatScene/Components/Input';
import styles from './styles';

const ViewMedia = ({route}) => {
  const {displayName, media, time} = route.params;
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        {media.type === attachmentTypes.video && (
          <VideoPlayer url={media.url} />
        )}
        {media.type === attachmentTypes.image && (
          <Image
            source={{uri: media.url}}
            style={{flex: 1}}
            resizeMode="contain"
          />
        )}
      </View>
      <Topbar style={styles.topbar} title={displayName} subtitle={time} />
    </Screen>
  );
};

export default ViewMedia;

const VideoPlayer = ({url}) => {
  return (
    <Video
      resizeMode="contain"
      controls
      source={{
        uri: url,
      }}
      style={styles.container}
    />
  );
};
