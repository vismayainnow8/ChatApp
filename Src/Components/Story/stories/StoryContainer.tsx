import React, {useState} from 'react';
import ProgressView from './ProgressView';
import StoryView from './StoryView';
import {StoryContainerProps} from '../utils/interfaceHelper';
import {View} from 'react-native';
import {DEFAULT_DURATION} from '../utils/constant';
import moment from 'moment';
import {Topbar} from '../../Topbar';

const StoryContainer = (props: StoryContainerProps) => {
  const {data, duration, enableProgress, user, visible, onEndReached} = props;
  const [progressIndex, setProgressIndex] = useState(0);

  const onChange = (position: number) => {
    if (props.enableProgress ? props.enableProgress : true) {
      if (position < props.data.length) {
        setProgressIndex(position);
      } else {
        onEndReached();
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ProgressView
        enableProgress={enableProgress && visible}
        length={data.length}
        duration={duration ?? DEFAULT_DURATION}
        progressIndex={progressIndex}
        onChange={onChange}
      />
      <Topbar
        title={user.displayName}
        avatar={user.photoURL}
        subtitle={moment(data[progressIndex].time).format('D MMM YYYY h:mm a')}
        style={{backgroundColor: '#00000000'}}
      />
      <StoryView
        images={data}
        duration={duration ?? DEFAULT_DURATION}
        progressIndex={progressIndex}
      />
    </View>
  );
};

export default StoryContainer;
