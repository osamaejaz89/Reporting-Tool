import React,{useState, useEffect} from 'react';
import {Image, View, Animated} from 'react-native';
import Images from '../../assets/index';
import {height, width} from 'react-native-dimension';
import { colors } from '../../utils';

const Splash = props => {
    const [progressValue, setProgressValue] = useState(0);

    const launchProgress = () => {
      setTimeout(() => {
                  props.navigation.replace('Home');

      }, 1000);
    };

  useEffect(() => {
    launchProgress()
  },[])

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 5,
          // TEMP_BG backgroundColor:'pink'
        }}>
        <Image
          source={Images.Images.logo5}
          style={{
            width: 350,
            height: 350 * 0.36,
            resizeMode: 'contain',
          }}></Image>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 3,
        }}>

      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 2,
          // TEMP_BG backgroundColor:'pink'
        }}>
        {/* <CustomText
          label={'Version: ' + version}
          textStyle={{
            fontSize: width(5),
          }}
        /> */}
      </View>
    </View>
  );
};
export default Splash;
