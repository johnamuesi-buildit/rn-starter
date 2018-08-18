console.disableYellowBox = true;
//BuildIt-FE-Tribe/PHEAA-Android
//appcenter codepush deployment list -a BuildIt-FE-Tribe/PheAA
//appcenter apps create -d <appDisplayName> -o <operatingSystem> -p <platform> 

//appcenter apps create -d PHEAA-iOS -o iOS -p React-Native
//appcenter apps create -d PHEAA-ANDROID -o Android -p React-Native
//appcenter apps list

//appcenter codepush deployment add -a john.amuesi/PHEAA-ANDROID Production

//appcenter codepush deployment list -a john.amuesi/PHEAA-ANDROID
//│ Production │ wxwtaK2hAE-LwzM5ux1vX5Mod2F1r1xXfFl8X │


//appcenter codepush deployment list -a john.amuesi/PHEAA-IOS
//│ Production │ FQQbh1Br9aHKFv5j6inPah1nvYMHBkmrMFxL7 │



import React, {Component} from 'react';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://49858edec3e94dddabb47a44ddd8107f@sentry.io/1260032').install();

import codePush from 'react-native-code-push';


import RootNavigation from './src/navigation/RootNavigation';

const codePushOptions = {
  installMode: codePush.InstallMode.ON_NEXT_RESTART,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
};

import store from './src/redux/store';
import {Provider} from 'react-redux';

class App extends Component {
  render () {

    return <Provider store={store}><RootNavigation /></Provider>
  }
}

// export default codePush(codePushOptions)(App);
export default App;