import React from 'react';
import {Platform, I18nManager} from 'react-native';
import {width, totalSize} from 'react-native-dimension';

import {createDrawerNavigator} from 'react-navigation-drawer';

import SideMenu from '../routes/SideMenu';

import Stack from './miniStack';
import miniStack from './miniStack';
import { colors } from '../../utils';
import stack from '../stack';

const DrawerComp = createDrawerNavigator(
  {stack: Stack},

  
  {
    //order: ['SignUpAs', 'FavouriteBook', 'Author', 'Publisher'],
    initialRouteName: 'stack',
    drawerWidth: width(80),
    contentComponent: props => <SideMenu {...props} />,
    drawerPosition: I18nManager.isRTL ? 'right' : 'left',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',

    useNativeAnimations: true,
    drawerBackgroundColor: 'rgba(0,0,0,0.9)',
    activeBackgroundColor: colors.white,
    drawerType: 'slide',

    overlayColor: 'rgba(50,50,50,0.5)', //COLOR_TRANSPARENT_WHITE,
    contentOptions: {
      activeTintColor: colors.primary,
      activeBackgroundColor: colors.white,
      inactiveTintColor: colors.black,
      itemsContainerStyle: {
        justifyContent: 'center',
      },
      itemStyle: {
        // ImageBackground:'red'
      },

      labelStyle: {
        fontSize: totalSize(1.6),
      },
      activeLabelStyle: {
        fontFamily: 'bold',
        fontSize: totalSize(1.9),
      },
      inactiveLabelStyle: {
        fontSize: totalSize(1.6),
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
  },
);
export default DrawerComp;
