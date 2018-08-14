import { AppRegistry } from 'react-native';
import App from './App';

import setupSentry from './src/utils';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://49858edec3e94dddabb47a44ddd8107f@sentry.io/1260032').install();


setupSentry();
 
AppRegistry.registerComponent('pheaa', () => App);

