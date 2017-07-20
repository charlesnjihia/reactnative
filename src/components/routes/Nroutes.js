import React from 'react';
import { TabNavigator,StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';
import Home from '../home/Home.js';
import About from '../about/About.js';
import Splash from '../splash/Splash.js';

/* routes file for navigation between views */
 const Nroutes = StackNavigator({
	Splash: {
    screen: Splash,
	navigationOptions: {      
	  header: null
    },
  },
	Home: {
    screen: Home,
	navigationOptions: {
      title: 'Home',
	  header: null
    },
  },
  
  
  About: {
    screen: About,
  },
});
export default Nroutes