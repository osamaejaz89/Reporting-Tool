import {createStackNavigator} from 'react-navigation-stack';
import Preview from '../../Screens/Preview/preview';

const screens = {
  Preview: {
    screen: Preview,
    
  },
};

const AboutStack = createStackNavigator(screens, {
  headerMode: 'none',
});

export default AboutStack;
