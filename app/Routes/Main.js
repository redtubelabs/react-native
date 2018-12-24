import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from '../Views/Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home }
});

export default createAppContainer(AppNavigator);