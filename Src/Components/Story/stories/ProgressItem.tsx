import React, {useRef} from 'react';
import {BAR_INACTIVE_COLOR, BAR_ACTIVE_COLOR} from '../utils/colors';
import {ProgressItemProps} from '../utils/interfaceHelper';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';

const {width: BAR_WIDTH} = Dimensions.get('window');
const BAR_HEIGHT = 2;

function ProgressItem(props: ProgressItemProps) {
  const barActiveColor = BAR_ACTIVE_COLOR;
  const barInActiveColor = BAR_INACTIVE_COLOR;
  const totalBarWidth = BAR_WIDTH - props.size * 2;
  const barWidth = totalBarWidth / props.size;
  const barHeight = BAR_HEIGHT;
  const progress = useRef(new Animated.Value(0)).current;
  const animation = Animated.timing(progress, {
    useNativeDriver: false,
    toValue: barWidth,
    duration: 5000,
  });

  const startProgress = () => {
    if (props.currentIndex === props.progressIndex) {
      animation.start(({finished}) => {
        if (finished) {
          props.onChangePosition();
        }
      });
    }
  };

  const stopProgress = () => {
    animation.stop();
  };

  const resetProgress = () => {
    animation.reset();
  };

  React.useEffect(() => {
    if (props.enableProgress) {
      startProgress();
    } else {
      stopProgress();
    }
  }, [props.enableProgress]);

  React.useEffect(() => {
    resetProgress();
    if (props.enableProgress) {
      startProgress();
    }
  }, [props.progressIndex]);

  return (
    <View
      style={[
        styles.mainParent,
        {
          minWidth: barWidth,
          backgroundColor: barInActiveColor,
        },
      ]}>
      {props.currentIndex === props.progressIndex && (
        <Animated.View
          style={[
            styles.childActive,
            {
              width: progress,
              height: barHeight,
              backgroundColor: barActiveColor,
            },
          ]}
        />
      )}

      {props.currentIndex != props.progressIndex && (
        <View
          style={[
            styles.childInactive,
            {
              backgroundColor:
                props.currentIndex >= props.progressIndex
                  ? barInActiveColor
                  : barActiveColor,
              minWidth: barWidth,
              height: barHeight,
            },
          ]}
        />
      )}
    </View>
  );
}

export default ProgressItem;

const styles = StyleSheet.create({
  mainParent: {
    borderRadius: 20,
  },
  childActive: {
    borderRadius: 20,
  },
  childInactive: {
    borderRadius: 20,
  },
});
