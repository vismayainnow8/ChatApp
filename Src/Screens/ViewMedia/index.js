import React, {useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';

import Video from 'react-native-video';
import moment from 'moment';
import {Screen, Topbar} from '../../Components';
import {attachmentTypes} from '../ChatScene/Components/Input';
import styles from './styles';
import {colors} from '../../Assets';

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
      <Topbar
        style={styles.topbar}
        title={displayName}
        subtitle={moment(time).format('D MMM YYYY h:mm a')}
      />
    </Screen>
  );
};

export default ViewMedia;

const VideoPlayer = ({url}) => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.videoContainer}>
      <Video
        resizeMode="contain"
        controls
        onLoad={() => setLoading(false)}
        source={{
          uri: url,
        }}
        style={styles.container}></Video>
      <ActivityIndicator
        animating={loading}
        style={styles.loader}
        color={colors.themePrimary.normal}
        hidesWhenStopped
        size={50}
      />
    </View>
  );
};
