import React from 'react';
import { Text, View } from 'react-native';
import GlobalProvider from './context/provider';
import AppNavContainer from './navigations';

export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer/>
    </GlobalProvider>
  );
}
