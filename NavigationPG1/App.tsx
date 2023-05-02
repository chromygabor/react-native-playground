/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './src/AppNavigation';
import {AuthProvider} from './src/context/AuthContext';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}

export default App;
