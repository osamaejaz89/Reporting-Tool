import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import {Platform, I18nManager} from 'react-native';
import {width, totalSize} from 'react-native-dimension';
import {colors} from '../../utils';
import SideMenu from './SideMenu';
// stacks
import Stack from './stack';
import AboutStack from './aboutStack';
import  top250Movies  from '../../Screens/Top250Movies/Top250Movies';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Stack,
    },
    About: {
      screen: AboutStack,
    },
    Top250Movies: {
      screen: top250Movies,
    },
  },
  //   {
  //     //order: ['SignUpAs', 'FavouriteBook', 'Author', 'Publisher'],
  //     initialRouteName: 'Home',
  //     drawerWidth: width(80),
  //     contentComponent: props => <SideMenu {...props} />,
  //     drawerPosition: I18nManager.isRTL ? 'right' : 'left',
  //     mode: Platform.OS === 'ios' ? 'modal' : 'card',

  //     useNativeAnimations: true,
  //     drawerBackgroundColor: 'rgba(0,0,0,0.9)',
  //     activeBackgroundColor: colors.white,
  //     drawerType: 'slide',

  //     overlayColor: 'rgba(50,50,50,0.5)', //COLOR_TRANSPARENT_WHITE,
  //     contentOptions: {
  //       activeTintColor: colors.primary,
  //       activeBackgroundColor: colors.white,
  //       inactiveTintColor: colors.black,
  //       itemsContainerStyle: {
  //         justifyContent: 'center',
  //       },
  //       itemStyle: {
  //         // ImageBackground:'red'
  //       },

  //       labelStyle: {
  //         fontSize: totalSize(1.6),
  //       },
  //       activeLabelStyle: {
  //         fontFamily: 'bold',
  //         fontSize: totalSize(1.9),
  //       },
  //       inactiveLabelStyle: {
  //         fontSize: totalSize(1.6),
  //       },
  //       iconContainerStyle: {
  //         opacity: 1,
  //       },
  //     },
  //   },
);

export default createAppContainer(RootDrawerNavigator);
