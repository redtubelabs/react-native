import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from '../Views/Home';
import Result from '../Views/Result';

import { purple } from '../utils/colors';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Result: { screen: Result }
},
  {
    initialRouteName: 'Home',
    gesturesEnabled: false,
    defaultNavigationOptions: {
      headerTitle: ('RedTube Labs'),
      headerStyle: {
        backgroundColor: purple,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: "center",
        alignSelf: "center",
        width: '90%',
      },
    },

  });

export default createAppContainer(AppNavigator);