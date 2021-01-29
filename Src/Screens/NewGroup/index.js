import React from 'react';
import { Text, FlatList, TextInput, Pressable, Image, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Screen, Topbar } from '../../Components';

const NewGroup = ({ navigation }) => {
  const [groupName, setGroupName] = useState(null);
  const [usersId, setUsersId] = useState([]);
  const [selectedUsers, setselectedUsers] = useState([]);
  var usersIdVariable = [];

  const contacts = useSelector((state) =>
    Object.keys(state.contacts.contacts).map(
      (key) => state.contacts.contacts[key],
    ),
  );

  const topbarMenus = [
    { icon: 'refresh', component: MaterialIcons },
  ];

  const selectContact = (selectedItem) => {
    var selectedUsersVariable = selectedUsers;
    let isItemSelected =
      selectedUsersVariable.filter(item => {
        return item.uid.includes(selectedItem.uid);
      }).length > 0
        ? true
        : false

    if (isItemSelected) {
      const index = selectedUsersVariable.findIndex(
        obj => obj.uid === selectedItem.uid
      );
      selectedUsersVariable.splice(index, 1);
    } else {
      selectedUsersVariable.push(selectedItem);
    }

    setselectedUsers(selectedUsersVariable)

    // var usersIdVariable = [];
    selectedUsersVariable.forEach(item => {
      let user = {};
      user = item.uid;
      usersIdVariable.push(user);
    });
    setUsersId(usersIdVariable)

  }

  const Item = ({ photoURL, displayName, uid, phoneNumber, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.listItemContainer}>
      <View style={styles.outerIconContainerperson}>
        <View style={styles.iconContainerperson}>
          {photoURL ? (
            <Image source={{ uri: photoURL }} style={styles.initStyle} />
          ) : (
              <MaterialIcons name="person" color="white" size={23} />
            )}
        </View>
        {usersId.includes(uid) &&
          <MaterialIcons name="check-circle" color="#128C7E" size={23} style={styles.check} />
        }
      </View>
      <View style={styles.nameContainer}>
        <Text>{displayName}</Text>
        <View style={styles.dateContainer}>
          <Text
            numberOfLines={1}
            style={{ fontWeight: '400', color: '#666', fontSize: 12 }}>
            {phoneNumber}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <Screen>
      <Topbar title="New Group" menus={topbarMenus} noavatar={'noavatar'} />
      <FlatList
        style={styles.mainContainer}
        data={contacts}
        renderItem={({ item }) => (
          <Item
            displayName={item.displayName}
            photoURL={item.photoURL}
            phoneNumber={item.phoneNumber}
            uid={item.uid}
            onPress={() => selectContact(item)}
          />
        )}
        keyExtractor={(item) => item.uid}
      />
      <TouchableOpacity style={styles.contactsbuttonContainer}>
        <Icon
          name="arrow-right"
          color="white"
          size={24}
          style={styles.fabIcon}
          onPress={() => navigation.navigate('MakeNewGroup', { selectedUsers, usersId })}

        />
      </TouchableOpacity>

    </Screen>
  );
};

export default NewGroup;




