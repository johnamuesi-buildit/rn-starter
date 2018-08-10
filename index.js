import { AppRegistry } from 'react-native';
import App from './App';

import setupSentry from './src/utils/sentry';

setupSentry();
 
AppRegistry.registerComponent('pheaa', () => App);
