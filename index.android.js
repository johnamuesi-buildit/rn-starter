import { AppRegistry } from 'react-native';
import App from './App';

import setupSentry from './src/utils';

setupSentry();
 
AppRegistry.registerComponent('pheaa', () => App);

