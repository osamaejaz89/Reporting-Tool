import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from "../../Screens/Home/home";
import Preview from "../../Screens/Preview/preview";

const stackScreens = {
    Home: Home,
    Preview: Preview
};

const stackConfig = {
  headerMode: 'none',
  initialRouteName: 'Home',
};

const MainNavigator = createStackNavigator(stackScreens, stackConfig);
export default createAppContainer(MainNavigator);
