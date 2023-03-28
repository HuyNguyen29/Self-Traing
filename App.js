/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Text, TextInput} from 'react-native';
import {Provider} from 'react-redux';
import Root from './src';
import ErrorBoundary from './src/component/ErrorBoundary';
import {persistor, store} from './src/redux/store';
// import SplashScreen from 'react-native-splash-screen';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {PersistGate} from 'redux-persist/integration/react';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const App = () => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;

  useEffect(() => {
    // SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <ErrorBoundary>
            <Root />
          </ErrorBoundary>
        </PersistGate>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
