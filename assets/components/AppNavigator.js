import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import Login from './Login';
import Welcome from './Welcome';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login:{
  	screen: Login
  },
  	Welcome:{
  	screen: Welcome
  }
});

export default createAppContainer(AppNavigator);
