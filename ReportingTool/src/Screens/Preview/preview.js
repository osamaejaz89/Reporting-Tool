import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {colors} from '../../utils';
import CustomHeader from '../../Components/CustomHeader';

const Preview = props => {
  return (
    <ScrollView
      style={{backgroundColor: colors.white}}
      contentContainerStyle={{flexGrow: 1}}>
      <CustomHeader title={'Registration'} />

      <View>
        <Text>Preview Screen</Text>
      </View>
    </ScrollView>
  );
};

export default Preview;
