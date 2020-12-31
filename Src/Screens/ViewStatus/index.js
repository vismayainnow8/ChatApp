import React, {useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {StoryContainer} from '../../Components/Story';
import {Screen} from '../../Components';
const ViewStatus = ({navigation, route}) => {
  const {section, index} = route.params;
  const [page, setPage] = useState(index);
  const pagerRef = useRef();

  const nextPage = () => {
    if (section.data.length <= page + 1) {
      return navigation.goBack();
    }
    pagerRef.current.setPage(page + 1);
  };

  const previousPage = () => {
    pagerRef.current.setPage(page - 1);
  };

  return (
    <Screen style={styles.screen} statusBarColor={'#000000'}>
      <ViewPager
        ref={pagerRef}
        style={styles.viewPager}
        initialPage={index}
        onPageSelected={(page) => setPage(page.nativeEvent.position)}>
        {section.data.map((user, index) => (
          <View key={index.toString()}>
            <StoryContainer
              user={user}
              data={user.statuses}
              visible={index === page}
              duration={20}
              goToNextPage={nextPage}
              goToPreviousPage={previousPage}
            />
          </View>
        ))}
      </ViewPager>
    </Screen>
  );
};

export default ViewStatus;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#000000',
  },
  viewPager: {
    flex: 1,
  },
});
