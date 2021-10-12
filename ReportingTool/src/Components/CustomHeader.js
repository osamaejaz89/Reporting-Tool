import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
// import {colors} from '../../helper';
import {colors} from '../utils';
import {width} from 'react-native-dimension';
import {withNavigation} from 'react-navigation';

const CustomHeader = props => {
  return (
    <View style={[styles.conatiner, props.appHeadContainer]}>
      <TouchableOpacity
        style={{flex: 0.2}}
        onPress={() => props.navigation.toggleDrawer()}>
        <Icon
          type={'Entypo'}
          name={'menu'}
          style={{
            fontSize: width(8),
            color: colors.white,
          }}></Icon>
      </TouchableOpacity>

      <View style={{flex:0.8, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[styles.textStyle, props.textStyle]}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary_color,
    height: 90,
    padding: 10,
    borderBottomColor: colors.placeHolder,
    borderBottomWidth: 1,
  },
  rightIconStyle: {
    color: colors.black,
    fontSize: 24,
    alignSelf: 'center',
  },
  leftView: {

  },
  centerView: {
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  iconStyle: {
    color: colors.black,
    fontSize: 15,
  },
  titleView: {

    justifyContent: 'center',
    alignSelf: 'center',
  },
  centerStyle: {
    marginTop: 25,
    width: '15%',
    // borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {color: colors.white, fontWeight: 'bold', fontSize: width(6), right:width(5)},
  rightView: {
    // borderWidth:1,
    flexDirection: 'row',
    // width: '10%',
    alignItems: 'center',
    marginTop: 25,
  },
});

export default withNavigation(CustomHeader);
