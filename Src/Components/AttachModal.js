import React, {useState, useEffect} from 'react';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {colors, consts} from '../Assets';

export const AttachModal = (props) => {
  const [modalVisible, setModalVisible] = useState(props.setModalVisible);

  useEffect(() => {
    setModalVisible(props.setModalVisible);
    console.log('props.setModalVisible', props.setModalVisible);
  }, [props.setModalVisible]);

  return (
    <View style={styles.modalView}>
      <View style={styles.topContainer}>
        <View style={{flex: 1}}>
          <View style={[styles.circle, {backgroundColor: '#6F3CF6'}]}>
            <IconMaterialIcons name="note" color="white" size={23} />
          </View>
          <Text style={styles.circleText}>Document</Text>
        </View>
        <View style={{flex: 1}}>
          <View style={[styles.circle, {backgroundColor: '#F9227A'}]}>
            <IconMaterialIcons name="camera-alt" color="white" size={23} />
          </View>
          <Text style={styles.circleText}>Camera</Text>
        </View>
        <View style={{flex: 1}}>
          <View style={[styles.circle, {backgroundColor: '#EF3FDA'}]}>
            <IconMaterialIcons name="image" color="white" size={23} />
          </View>
          <Text style={styles.circleText}>Gallery</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{flex: 1}}>
          <View style={[styles.circle, {backgroundColor: '#FDC63D'}]}>
            <IconMaterialIcons name="headset" color="white" size={23} />
          </View>
          <Text style={styles.circleText}>Audio</Text>
        </View>
        <View style={{flex: 1}}>
          <View style={[styles.circle, {backgroundColor: '#36CD1B'}]}>
            <IconMaterialIcons name="location-on" color="white" size={23} />
          </View>
          <Text style={styles.circleText}>Location</Text>
        </View>
        <View style={{flex: 1}}>
          <View style={[styles.circle, {backgroundColor: '#36DEF5'}]}>
            <IconMaterialIcons name="person" color="white" size={23} />
          </View>
          <Text style={styles.circleText}>Contact</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    // alignItems: "center"
  },
  bottomContainer: {
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: "orange",
    // alignItems: "center"
  },
  modalView: {
    // marginBottom: consts.ScreenHeight * 0.08,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '95%',
    alignItems: 'center',
    height: 215,
    alignSelf: 'center',
    padding: 20,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor: "yellow",
    // bor
  },
  circleText: {
    textAlign: 'center',
    color: 'grey',
  },
});

// export default App;
