import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import SplashScreen from 'react-native-splash-screen'
import SplashAnimation from './SplashAnimation'




const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Splash: SplashAnimation
  },
  {
    initialRouteName: 'Splash',
  }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
  SplashScreen.hide();
    return <AppContainer />;
  }
}
