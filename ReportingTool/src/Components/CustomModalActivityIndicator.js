import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {height, width} from 'react-native-dimension';
import Modal from 'react-native-modal';
import { colors } from '../utils';

const CustomModalActivityIndicator = props => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex:1}}>
      <Modal
        transparent={true}
        isVisible={props.isModalVisible}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: width(75),
            height: height(30),
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color={colors.primary_color} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModalActivityIndicator;
