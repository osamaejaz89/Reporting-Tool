import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import CustomText from '../../Components/CustomText';
// import SideComponentHeader from '../../components/SideMenuComponents/SideComponentHeader';
import {connect} from 'react-redux';
import { colors } from '../../utils';
import BoxOptions from '../../Components/BoxOptions';
import MiniOptions from '../../Components/MiniOptions';
const SideMenu = props => {

  return (
      <ScrollView contentContainerStyle={{flex:1,backgroundColor: colors.white}} style={{flexGrow:1}}>
        <MiniOptions
          iconName="gift"
          iconType="Feather"
          text="Giveaways"
               />
        <MiniOptions
          iconName="calendar"
          iconType="Feather"
          text="Home"
            />
        <MiniOptions
          iconName="tag"
          iconType="Feather"
          text="Shelves / Tags"
             />

      </ScrollView>
  );
};

export default (SideMenu);
