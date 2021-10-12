import React, {useState} from 'react';
import {View, Platform, StyleSheet} from 'react-native';

import { colors } from '../utils';

import DropDownPicker from 'react-native-dropdown-picker';
import {width} from 'react-native-dimension';
const DropDownSelect = props => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  // const [userRole, setUserRole] = useState(null);
  // const [userRoles, setUserRoles] = useState(props.dropdownData);

  return (
    <View
      style={[
        {
          alignItems: 'center',
          marginVertical: width(1.5),
        },
        {
          ...(Platform.OS !== 'android' && {
            zIndex: 10,
          }),
        },
        props.mainContainerStyle,
      ]}>
      <DropDownPicker
        disabled={props.disabled}
        controller={props.controller}
        onOpen={props.onOpen}
        // disabled={true}
        onChangeList={props.onChangeList}
        rtl={true}
        globalTextStyle={[
          CommonStyles.smallTextStyle,
          {
            lineHeight: width(5),
            marginLeft: width(0),
          },
          props.globalTextStyle,
        ]}
        placeholder={
          props.placeholder === 'undefined'
            ? 'Select an Item'
            : props.placeholder
        }
        style={{
          borderColor:
            props.borderColor != undefined
              ? props.borderColor
              : colors.light_grey,
          alignSelf: 'center',
        }}
        placeholderStyle={[props.placeholderStyle, {fontFamily: 'Roboto'}]}
        open={props.open}
        setOpen={props.setOpen}
        items={props.items}
        value={props.value}
        onChangeItem={props.onChangeItem}
        zIndex={10}
        labelProps={''}
        labelStyle={[
          {
            textAlign: 'left',
            fontFamily: 'Roboto',
          },
          props.labelStyle,
        ]}
        containerStyle={[
          {
            width: width(84),
            height: width(14),
          },
          props.containerStyle,
        ]}
        dropDownStyle={props.dropDownStyle}
        dropDownContainerStyle={{
          backgroundColor: colors.white,
          width: '90%',
        }}
        setOpen={props.setOpen}
        setValue={props.setValue}
        setItems={props.setItems}
      />
    </View>
  );
};

export default DropDownSelect;

const CommonStyles = StyleSheet.create({
  INPUT_BOX_SPACING: {
    paddingVertical: width(1),
    alignItems: 'center',
  },
  INPUT_SAHADOW: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  headingStyle: {
    fontSize: width(5.5),
    fontFamily: 'Roboto-Black',
    color: colors.red,
    // textAlign: 'right',
    marginTop: width(4),
  },
  smallTextStyle: {
    fontSize: width(3.8),
    color: colors.light_grey,
    lineHeight: width(7),
    fontFamily: 'Roboto',
  },
  viewContainerStyle: {
    backgroundColor: colors.white,
    marginTop: width(0.5),
    elevation: 1,
    paddingVertical: width(3),
    paddingHorizontal: width(6),
  },

  touchableTextStyle: {
    color: colors.light_grey,
    lineHeight: width(7),

    textDecorationLine: 'underline',
    fontFamily: 'Roboto-Black',
    fontSize: width(3.4),
  },
  inputBoxStyle: {
    borderColor: colors.light_grey,
    borderWidth: width(0.3),
    borderRadius: width(2),
    alignSelf: 'center',
    height: width(14),
    width: width(84),
    marginVertical: width(1.5),
    paddingHorizontal: width(3),
  },
});
