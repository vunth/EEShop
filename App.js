/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// import Home from './components/Home/Home';
// import Authentication from './components/Authentication/Authentication';
// import ChangeInformation from './components/ChangeInformation/ChangeInformation';
// import OrderHistory from './components/OrderHistory/OrderHistory';

StatusBar.setHidden(true);

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};

const Home = require('./components/Home/Home');
const Authentication = require('./components/Authentication/Authentication');

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Authentication: { screen: Authentication }
  }, 
  // {
  //   navigationOptions: () => ({
  //     gestureDirection: 'inverted',
  //   }),
  //   transitionConfig: () => ({
  //     screenInterpolator: sceneProps => {
  //       const { layout, position, scene } = sceneProps;
  //       const { index } = scene;
  //       const width = layout.initWidth;
  
  //       return {
  //         transform: [{
  //           translateX: position.interpolate({
  //             inputRange: [index - 1, index, index + 1],
  //             outputRange: [-width, 0, width],
  //           }),
  //         }]
  //       };
  //     },
  //   })
  // }
);

export default createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
