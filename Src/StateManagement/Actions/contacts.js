import {Platform, PermissionsAndroid} from 'react-native';
import Contact from 'react-native-contacts';
import firestore from '@react-native-firebase/firestore';
import {ADD_CONTACTS, RESET_CONTACTS, SET_LOADING_CONTACTS} from './types';

export const addContacts = (res) => {
  return {
    type: ADD_CONTACTS,
    contacts: res,
  };
};

export const resetContacts = () => {
  return {
    type: RESET_CONTACTS,
  };
};

export const setContactsLoading = (res) => {
  return {
    type: SET_LOADING_CONTACTS,
    loading: res,
  };
};

const loadContacts = async () => {
  try {
    const mobileContacts = await Contact.getAll();
    const filteredContacts = mobileContacts.filter((item) =>
      Boolean(item.phoneNumbers.length),
    );
    const contactsMap = filteredContacts.reduce((prev, current) => {
      let newMap = current.phoneNumbers.reduce((newPrev, newCurrent) => {
        if (newCurrent.number.replace(/[^0-9+]/g, '').length < 7) {
          return newPrev;
        }
        return {
          ...newPrev,
          [newCurrent.number.replace(/[^0-9+]/g, '')]: current.displayName,
        };
      }, {});
      return {...prev, ...newMap};
    }, {});
    return Object.keys(contactsMap);
  } catch (error) {
    throw error;
  }
};

export const generateContacts = () => {
  return async (dispatch) => {
    // start = new Date().getTime();
    try {
      Platform.OS === 'android' &&
        (await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
          },
        ));
      dispatch(resetContacts());
      dispatch(setContactsLoading(true));
      var mobileContactsArray = await loadContacts();
    
      var formattedData = [];
      mobileContactsArray.forEach(item => {
        item = '+91' + item;
          formattedData.push(item);
      });
      // return formattedData;
      console.log('formattedData',formattedData)

      let contactsChunks = [];
      for (let i = 0; i < Math.ceil(formattedData.length / 10); i++) {
        contactsChunks.push(formattedData.slice(i * 10, (i + 1) * 10));
      }
      Promise.all(
        contactsChunks.map((chunk) => dispatch(checkContactsInServer(chunk))),
      ).then(() => {
        dispatch(setContactsLoading(false));
      });
    } catch (error) {
      console.log(error);
      dispatch(setContactsLoading(false));

      throw error;
    } finally {
    }
  };
};

const checkContactsInServer = (chunk) => {
  return (dispatch) => {
    return firestore()
      .collection('Users')
      .where('phoneNumber', 'in', chunk)
      .get()
      .then((querySnapshot) => {
        let data = {};
        querySnapshot.forEach((documentSnapshot) => {
          data[documentSnapshot.id] = {
            uid: documentSnapshot.id,
            ...documentSnapshot.data(),
          };
        });
        if (Object.keys(data).length === 0) return;
        
        else {
          dispatch(addContacts(data))};
      });
  };
};
