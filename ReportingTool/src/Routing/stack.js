import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Splash from '../Screens/Splash/splash';
import Home from '../Screens/Home/home';
import Preview from '../Screens/Preview/preview';
import Drawer from './Drawer/DrawerStack';

const stackScreens = {
  Splash: {
    screen: Splash,
  },
  Home: {
    screen: Home,
  },
  Preview: {
    screen: Preview,
  },
  Drawer: {
    screen: Drawer,
  },
};

const stackConfig = {
  headerMode: 'none',
  initialRouteName: 'Splash',
};

const MainNavigator = createStackNavigator(stackScreens, stackConfig);
export default createAppContainer(MainNavigator);
