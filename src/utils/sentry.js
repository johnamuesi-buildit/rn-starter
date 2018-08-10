// Sentry for error reporting
import { Sentry } from 'react-native-sentry';
import DeviceInfo from 'react-native-device-info';

import {SENTRY_DNS}  from '../constants';

const addBuildContext = () => {
  Sentry.setTagsContext({
    appVersion: DeviceInfo.getVersion(),
    buildNumber: DeviceInfo.getBuildNumber(),
    deviceInfo: {
      systemName: DeviceInfo.getSystemName(),
      systemVersion: DeviceInfo.getSystemVersion(),
      deviceName: DeviceInfo.getDeviceName()
    }
  })
}

//Sentry config
export const  setupSentry = () =>  {
    Sentry.config(SENTRY_DNS).install();
    addBuildContext()
  }

  // test Sentry call
  mockApiCall = async () => {
    try {
      const response = await sdk.getApiCall()
      this.setState({ response })
    } catch (err) {
      this.setState({ error: err })
      Sentry.captureException(err)
     // Sentry.captureException(err, { extra: xxxx }) // extra info

    }
  }  
 