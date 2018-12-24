import { AppRegistry } from 'react-native';
// import App from './App';
import Home from './app/Views/Home';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Home);
