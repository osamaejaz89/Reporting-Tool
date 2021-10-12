import React, {useState} from 'react';
import {View, ActivityIndicator, TouchableOpacity,Text, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import Modal from 'react-native-modal';
import {colors, dimensions} from '../utils/index';

const CustomResultModal = props => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={props.isModalVisible || isModalVisible}
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
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: 50,
              borderRadius: 10,
            }}>
            <View style={{bottom: 20}}>
              <Text
                style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                Result
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'green'}}>Correct Answers = </Text>
              <Text style={{color: 'green'}}>{props.correctAnswers} %</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'red'}}>Doubtful Answers = </Text>
              <Text style={{color: 'red'}}>{props.doubtfulAnswers}</Text>
            </View>
            <View style={{marginTop: 20}}>
              <TouchableOpacity
                              onPress={props.onPress}
                style={
                  props.isComplete || props.disableButton
                    ? styles.confimLoaderBtnDisabled2
                    : styles.confimLoaderBtn2
                }>
                <Text style={styles.uploadButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomResultModal;

const styles = StyleSheet.create({
  confimLoaderBtn2: {
    width: dimensions.WIDTH(50),
    height: dimensions.WIDTH(10),
    backgroundColor: colors.primary_color,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: dimensions.WIDTH(1),
    marginLeft: dimensions.WIDTH(1),
    paddingVertical: dimensions.WIDTH(1),
  },
  confimLoaderBtnDisabled2: {
    width: dimensions.WIDTH(50),
    height: dimensions.WIDTH(10),
    backgroundColor: colors.light_grey,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: dimensions.WIDTH(1),
    marginLeft: dimensions.WIDTH(1),
  },
  confimLoaderBtnText2: {
    fontSize: dimensions.WIDTH(4.4),
    color: colors.white,
  },
  uploadButtonText: {
    color: '#f6f5f8',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});