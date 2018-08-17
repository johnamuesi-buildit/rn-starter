 # My React Native Template 

![](https://cdn-images-1.medium.com/max/1600/1*AjesIvV-kkwk6LLvNf1t4A.png)

This repo contains an example React Native App that I can use to help a developer get up to speed with the framework.
It's certainly been put together in an opinianated way based upon my own experiences of working with it. 

## Get Started

If you have not yet installed React Native, you can use [this tutorial](https://facebook.github.io/react-native/docs/getting-started.html).

### Run on Android

1. You have to connect hardware device using [ADB](https://developer.android.com/studio/command-line/adb.html) or run [emulator](https://developer.android.com/studio/run/emulator-commandline.html).
2. Invoke ```react-native run-android``` command.

### Run on iOS

1. You have to get  [Xcode](https://developer.apple.com/xcode/) installed on your machine.
2. Invoke ```react-native run-ios``` command.

## Frameworks I have used and suggest using:

1. Navigator: https://reactnavigation.org/

2. Permissions: https://github.com/yonahforst/react-native-permissions

3. Image picker: https://github.com/ivpusic/react-native-image-crop-picker

4. Fabric: https://www.npmjs.com/package/react-native-fabric

5. Icons: https://oblador.github.io/react-native-vector-icons/

6. UI components: https://nativebase.io/

7. Dialogs: https://www.npmjs.com/package/react-native-popup-dialog

8. Error Reporting: https://sentry.io/

9. CI CD https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/react-native


## Some recommendations

1. Architecture: Redux + saga https://github.com/redux-saga/redux-saga

2. Code style: https://github.com/airbnb/javascript


## Some Antipatterns:
      - Do not use setState() in componentWillMount()
      - Do not perform any logic in render() function
      - Do not use indexes of an array as its keys
      - Do not validate forms with redux store
      - Do not perform any logic in reducers
      - Do not rely on JS single thread
      - Do not use x-index a lot
      - Do not use ListView, use FlatList instead
      - Remove console.log() calls
      - Use requestAnimationFrame to perform animations
      - Extend React.PureComponent as much as possible
      - Do not perform any logic in componentWillMount()
      - Use useNativeDriver for any animations

  General Project structure I try and follow:
   - android
   - ios
   - node_modules
   - index.android.js
   - index.ios.js
   - …
   - src
    - redux
     - actions
     - reducers
     - store
     
    - screens
    - navigation
    - components

    - config
    - assets
    
    ## Testing
    Jest used to run Unit Tests, Detox for E2E tests and AppCenter for CI CD

    
    