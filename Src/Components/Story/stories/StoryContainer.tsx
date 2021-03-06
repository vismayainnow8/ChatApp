import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import ProgressView from './ProgressView';
import StoryView from './StoryView';
import {StoryContainerProps} from '../utils/interfaceHelper';
import {View} from 'react-native';
import {DEFAULT_DURATION} from '../utils/constant';
import moment from 'moment';
import {Topbar} from '../../Topbar';
import {addViewedStatus} from '../../../StateManagement/Actions';

const StoryContainer = (props: StoryContainerProps) => {
  const {data, duration, user, visible, goToPreviousPage, goToNextPage} = props;
  const initialNotSeenIndex = data.findIndex((item) => !item.seen);
  const initialProgressIndex =
    initialNotSeenIndex < 0 ? 0 : initialNotSeenIndex;
  const [progressIndex, setProgressIndex] = useState(initialProgressIndex);
  const [progressDisabled, setProgressDisabled] = useState(false);
  const dispatch = useDispatch();

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

  const dispatchViewed = (id: string) => {
    dispatch(addViewedStatus({uid: user.uid, item: id}));
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
        visible={visible}
        images={data}
        duration={duration ?? DEFAULT_DURATION}
        progressIndex={progressIndex}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
        onProgressStateChange={onProgressStateChange}
        onViewed={dispatchViewed}
      />
    </View>
  );
};

export default StoryContainer;
