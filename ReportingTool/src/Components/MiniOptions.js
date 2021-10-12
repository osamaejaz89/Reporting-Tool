import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import { colors } from '../utils';
import CustomText from './CustomText';

const MiniOptions = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10,
            margin: 5,
          }}>
          <View>
            <Icon type={props.iconType} name={props.iconName} />
          </View>
          <View style={{marginTop: 5, marginHorizontal: 25}}>
            <CustomText label={props.text} />
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 1,
          margin: 5,
          marginHorizontal: 15,
          borderBottomColor: colors.gray,
        }}
      />
    </View>
  );
};

export default MiniOptions;
