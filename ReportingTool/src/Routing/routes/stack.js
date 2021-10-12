import {createStackNavigator} from 'react-navigation-stack';
import Home from '../../Screens/Home/home';
import Preview from '../../Screens/Preview/preview';

const screens = {
  Home: {
    screen: Home,
  },
  Preview: {
    screen: Preview,
  },
};

// home stack navigator screens
const Stack = createStackNavigator(screens, {
  headerMode: 'none',
  initialRouteName: 'Home',
});

export default Stack;
