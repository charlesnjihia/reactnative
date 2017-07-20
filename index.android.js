/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './src/components/home/Home.js';
import About from './src/components/about/About.js';
import Tabs from './src/components/routes/Nroutes.js';

export default class ok extends Component {
  render() {
    return (
        <Tabs />
    );
  }
}
AppRegistry.registerComponent('ok', () => ok);
