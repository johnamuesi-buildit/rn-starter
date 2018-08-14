import './ReactotronConfig';
import Reactotron from 'reactotron-react-native'

Reactotron.log('hello rendering world')

import React, {Component} from 'react';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://49858edec3e94dddabb47a44ddd8107f@sentry.io/1260032').install();


//af16274c-ddbd-4435-b48f-4cc7203e419e
//abd3feb4-08ab-48f1-9f48-5a021b17042e
import RootNavigation from './src/navigation/RootNavigation'

export default class App extends Component {
  render () {
    return <RootNavigation />
  }
}
