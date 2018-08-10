import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://49858edec3e94dddabb47a44ddd8107f@sentry.io/1260032').install();


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
