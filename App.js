/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

StatusBar.setHidden(true);

const Main = require('./components/Main/Main');
const Shop = require('./components/Main/Shop/Shop');
const Authentication = require('./components/Authentication/Authentication');
const ChangeInformation = require('./components/ChangeInformation/ChangeInformation');
const OrderHistory = require('./components/OrderHistory/OrderHistory');

const MainNavigator = createStackNavigator(
  {
    Main: { screen: Main },
    Shop: { screen: Shop },
    Authentication: { screen: Authentication },
    ChangeInformation: { screen: ChangeInformation },
    OrderHistory: { screen: OrderHistory }
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
