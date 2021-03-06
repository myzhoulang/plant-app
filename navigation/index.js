import React from 'react';
import { Image } from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import Settings from '../screens/Settings';

import { theme } from '../constants';

const screens = createStackNavigator({
  Welcome,
  // Login,
  // SignUp,
  // Forgot,
  // Explore,
  // Browse,
  // Product,
  // Settings,
}, {
  defaultNavigationOptions: {
    // header: <Header/>
    headerStyle: {
      // height: theme.sizes.base * 4,
      backgroundColor: theme.colors.white, // or 'white
      borderBottomColor: "transparent",
      elevation: 0, // for android
    },
    headerTitle: 'Header Title',
    headerBackImage: <Image source={require('../assets/icons/back.png')} />,
  }
});

export default createAppContainer(screens);