import React from 'react';
// import App from './App';

import renderer from 'react-test-renderer';

jest.mock('react-native-code-push', () => {
  const cp = (_) => (app) => app;
  Object.assign(cp, {
    InstallMode: {},
    CheckFrequency: {},
    SyncStatus: {},
    UpdateState: {},
    DeploymentStatus: {},
    DEFAULT_UPDATE_DIALOG: {},

    checkForUpdate: jest.fn(),
    codePushify: jest.fn(),
    getConfiguration: jest.fn(),
    getCurrentPackage: jest.fn(),
    getUpdateMetadata: jest.fn(),
    log: jest.fn(),
    notifyAppReady: jest.fn(),
    notifyApplicationReady: jest.fn(),
    sync: jest.fn(),
  });
  return cp;
});

describe('App', () => {
  it('renders without crashing', async() => {
    const App = await import('./App');
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });
});





// jest.mock('react-native-code-push', () => {
//   const cp = (_) => (app) => app;
//   Object.assign(cp, {
//     InstallMode: {},
//     CheckFrequency: {},
//     SyncStatus: {},
//     UpdateState: {},
//     DeploymentStatus: {},
//     DEFAULT_UPDATE_DIALOG: {},

//     checkForUpdate: jest.fn(),
//     codePushify: jest.fn(),
//     getConfiguration: jest.fn(),
//     getCurrentPackage: jest.fn(),
//     getUpdateMetadata: jest.fn(),
//     log: jest.fn(),
//     notifyAppReady: jest.fn(),
//     notifyApplicationReady: jest.fn(),
//     sync: jest.fn(),
//   });
//   return cp;
// });