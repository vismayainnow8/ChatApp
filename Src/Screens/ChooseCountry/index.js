import React, {useLayoutEffect} from 'react';
import {FlatList, SafeAreaView, StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {countryList} from '../../Assets/Consts';
import CountryRenderItem from './CountryRenderItem';

const ChooseCountry = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Choose a country',
      // headerRight: () => {
      //   return (
      //     <Ionicons
      //       name="search"
      //       size={24}
      //       color="#128c7e"
      //       style={{paddingRight: 15}}
      //     />
      //   );
      // },
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
        borderBottomWidth: 0.6,
        borderBottomColor: 'grey',
      },
      headerTintColor: '#128c7e',
    });
  }, []);

  const onPressItem = (item) => {
    navigation.navigate('Login', { country: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#075e54" />
      <FlatList
        data={countryList}
        initialNumToRender={20}
        removeClippedSubviews={true}
        legacyImplementation={true}
        windowSize={30}
        maxToRenderPerBatch={50}
        updateCellsBatchingPeriod={5}
        renderItem={({item}) => (
          <CountryRenderItem item={item}  onPressItem={onPressItem} />
        )}
        keyExtractor={(item) => item.iso}
      />
    </SafeAreaView>
  );
};
export default ChooseCountry;
