import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';

const App = () => {
  return (
    <Header />
  );
}

AppRegistry.registerComponent('albumsApp', () => App);
