import React from 'react';
import ProgressItem from './ProgressItem';
import {ProgressViewProps} from '../utils/interfaceHelper';
import {View, StyleSheet} from 'react-native';

function ProgressView(props: ProgressViewProps) {
  const {progressIndex} = props;

  function changePosition() {
    const mProgress = progressIndex + 1;
    props.onChange(mProgress);
  }

  return (
    <View style={styles.parent}>
      {Array.from(Array(props.length).keys()).map((value, index) => (
        <ProgressItem
          key={index.toString()}
          enableProgress={props.enableProgress}
          visible={props.visible}
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
