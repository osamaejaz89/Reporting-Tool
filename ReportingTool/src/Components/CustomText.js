import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { fontSize3 } from '../utils/index';

const CustomText = props => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      style={[stylesCustom.textStyle, props.textStyle]}>
      {props.label}
    </Text>
  );
};

export default CustomText;

const stylesCustom = StyleSheet.create({
  textStyle: {
    fontSize: fontSize3,
    fontWeight: 'normal',
    textAlign: 'left',
    fontFamily: 'Roboto',
  },
});
