import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import CustomText from './CustomText';
import { colors } from '../utils';
const BoxOptions = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          margin: 5,
          borderColor: colors.gray,
        },
        props.viewStyle,
      ]}>
      <Icon
        style={[{color: props.iconColor}, props.iconStyle]}
        type={props.type}
        name={props.name}
      />

      <CustomText textStyle={{marginTop: 5}} label={props.text} />
    </TouchableOpacity>
  );
};

export default BoxOptions;
