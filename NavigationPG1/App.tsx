/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {AuthProvider} from './src/context/AuthContext';
import AppNavigation from './src/navigation/AppNavigation';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 20,
  },
});
export default App;
