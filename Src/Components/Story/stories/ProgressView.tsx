import React, {useEffect, useState} from 'react';
import ProgressItem from './ProgressItem';
import {ProgressViewProps} from '../utils/interfaceHelper';
import {View, StyleSheet} from 'react-native';

function ProgressView(props: ProgressViewProps) {
  const [progressIndex, setProgressIndex] = useState(0);

  useEffect(() => {
    setProgressIndex(props.progressIndex);
  }, [props.progressIndex]);

  useEffect(() => {
    setProgressIndex(progressIndex);
  }, [props.enableProgress]);

  function changePosition() {
    if (props.enableProgress) {
      if (progressIndex < props.length) {
        const mProgress = progressIndex + 1;
        props.onChange(mProgress);

        setTimeout(() => {
          setProgressIndex(mProgress);
        }, 1500);
      }
    } else {
      setProgressIndex(progressIndex);
    }
  }

  return (
    <View style={styles.parent}>
      {Array.from(Array(props.length).keys()).map((value, index) => (
        <ProgressItem
          key={index.toString()}
          enableProgress={props.enableProgress}
          size={props.length}
          duration={props.duration}
          progressIndex={progressIndex}
          currentIndex={index}
          onChangePosition={() => changePosition()}
        />
      ))}
    </View>
  );
}

export default ProgressView;

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
