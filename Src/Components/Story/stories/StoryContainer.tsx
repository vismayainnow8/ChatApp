import React, {useState} from 'react';
import ProgressView from './ProgressView';
import StoryView from './StoryView';
import {StoryContainerProps} from '../utils/interfaceHelper';
import {View} from 'react-native';
import {DEFAULT_DURATION} from '../utils/constant';
import moment from 'moment';
import {Topbar} from '../../Topbar';

const StoryContainer = (props: StoryContainerProps) => {
  const {data, duration, user, visible, goToPreviousPage, goToNextPage} = props;
  const [progressIndex, setProgressIndex] = useState(0);
  const [progressDisabled, setProgressDisabled] = useState(false);

  const onChange = (position: number) => {
    if (position < 0) {
      goToPreviousPage();
    } else if (position < data.length) {
      setProgressIndex(position);
    } else {
      goToNextPage();
    }
  };

  const goToNext = () => {
    onChange(progressIndex + 1);
  };
  const goToPrevious = () => {
    onChange(progressIndex - 1);
  };

  const onProgressStateChange = (value: boolean) => {
    setProgressDisabled(value);
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ProgressView
        enableProgress={!progressDisabled && visible}
        visible={visible}
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
        goToNext={goToNext}
        goToPrevious={goToPrevious}
        onProgressStateChange={onProgressStateChange}
      />
    </View>
  );
};

export default StoryContainer;
