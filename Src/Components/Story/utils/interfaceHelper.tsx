import {ViewStyle, ImageStyle, ImageSourcePropType} from 'react-native';

export interface CommonProps {
  images?: Array<string>;
  duration?: number | undefined;
  containerStyle?: ViewStyle;
  enableProgress?: boolean | undefined;
  imageStyle?: ImageStyle;
}

export interface BarStyleProps {
  barActiveColor?: string;
  barInActiveColor?: string;
  barHeight?: number;
  barWidth?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
}

export interface ImageData {
  id: string;
  uri: string;
  time: number;
  type: string;
  seen: boolean;
}

export interface StoryContainerProps {
  user?: UserProps;
  data: Array<ImageData>;
  visible?: boolean | undefined;
  duration?: number | undefined;
  goToPreviousPage?: Function;
  goToNextPage?: Function;
}

export interface ProgressViewProps {
  duration?: number | undefined;
  enableProgress?: boolean | undefined;
  visible?: boolean | undefined;
  length: number;
  onChange: Function;
  progressIndex: number;
}

export interface ProgressItemProps {
  visible?: boolean | undefined;
  enableProgress?: boolean | undefined;
  size: number;
  duration?: number | undefined;
  progressIndex: number;
  currentIndex: number;
  onChangePosition: Function;
}

export interface StoryViewProps {
  onViewed: Function;
  images: Array<ImageData>;
  duration?: number | undefined;
  progressIndex: number;
  goToPrevious: Function;
  goToNext: Function;
  onProgressStateChange: Function;
}

export interface ArrowViewProps extends CommonProps {
  onArrowClick: Function;
}

export interface UserProps {
  uid: string;
  photoURL?: ImageSourcePropType | undefined;
  displayName?: string | undefined;
}

export interface ReplyFooterProps {
  progressIndex: number;
  onReplyTextChange: Function | undefined;
  onReplyButtonClick: Function | undefined;
}

export interface ReplyProps {
  isShowReply: boolean | undefined;
  onReplyTextChange: Function | undefined;
  onReplyButtonClick: Function | undefined;
}

export interface ProgressiveImageProps {
  thumbnailSource: string;
  imgSource: string;
  style?: ViewStyle | undefined;
  props?: any;
}
