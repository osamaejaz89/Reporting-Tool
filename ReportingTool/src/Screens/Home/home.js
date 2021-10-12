import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../../utils';
import CustomHeader from '../../Components/CustomHeader';
import { Icon } from 'native-base';
import { width } from 'react-native-dimension';

const Home = props => {
  return (
    <ScrollView
      style={{backgroundColor: colors.white}}
      contentContainerStyle={{flexGrow: 1}}>
      <CustomHeader title={'Home'} />
      <View>
        <Text>Home Screen</Text>
      </View>


    </ScrollView>
  );
};

export default (Home);
