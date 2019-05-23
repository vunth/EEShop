/* eslint-disable import/newline-after-import */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
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

// export default class App extends Component<Props> {
//   render() {
//     return (
//       <NavigationExperimental.Navigator
//         initialRoute={{ name: 'HOME' }}
//         renderScene={(route, navigator) => {
//           switch (route.name) {
//             case 'HOME': return <Home />;
//             case 'CHANGE_INFORMATION': return <ChangeInformation />;
//             case 'AUTHENTICATION': return <Authentication />;
//             default: return <OrderHistory />;
//           }
//         }}
//       />
//     );
//   }
// }
const Home = require('./components/Home/Home');
const MainNavigator = createStackNavigator({
  Home: { screen: Home }
});

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
