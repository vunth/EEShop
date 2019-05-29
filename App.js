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
    Main: { 
      screen: Main,
      navigationOptions: {
        header: null,
      }
    },
    Shop: { screen: Shop },
    Authentication: { 
      screen: Authentication,
      navigationOptions: {
        header: null,
      }
    },
    ChangeInformation: { screen: ChangeInformation },
    OrderHistory: { screen: OrderHistory }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#34B089',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontFamily: 'Avenir',
        fontWeight: 'bold',
      },
    },
  }
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

// import React from 'react';
// import { ScrollView, StatusBar, Button, Text } from 'react-native';
// import {
//   createStackNavigator,
//   createDrawerNavigator,
//   createAppContainer,
//   SafeAreaView
// } from 'react-navigation';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const MyNavScreen = ({ navigation, banner }) => (
//   <ScrollView>
//     <SafeAreaView forceInset={{ top: 'always' }}>
//       <Text>{banner}</Text>
//       <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
//       <Button
//         onPress={() => navigation.navigate('Email')}
//         title="Open other screen"
//       />
//       <Button onPress={() => navigation.goBack(null)} title="Go back" />
//     </SafeAreaView>
//     <StatusBar barStyle="default" />
//   </ScrollView>
// );

// const InboxScreen = ({ navigation }) => (
//   <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
// );
// InboxScreen.navigationOptions = {
//   headerTitle: 'Inbox',
// };

// const EmailScreen = ({ navigation }) => (
//   <MyNavScreen banner={'Email Screen'} navigation={navigation} />
// );

// const DraftsScreen = ({ navigation }) => (
//   <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
// );
// DraftsScreen.navigationOptions = {
//   headerTitle: 'Drafts',
// };

// const InboxStack = createStackNavigator({
//   Inbox: { screen: InboxScreen },
//   Email: { screen: EmailScreen },
// });

// InboxStack.navigationOptions = {
//   drawerLabel: 'Inbox',
//   // drawerIcon: ({ tintColor }) => (
//   //   <MaterialIcons
//   //     name="move-to-inbox"
//   //     size={24}
//   //     style={{ color: tintColor }}
//   //   />
//   // ),
// };

// const DraftsStack = createStackNavigator({
//   Drafts: { screen: DraftsScreen },
//   Email: { screen: EmailScreen },
// });

// DraftsStack.navigationOptions = {
//   drawerLabel: 'Drafts',
//   // drawerIcon: ({ tintColor }) => (
//   //   <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
//   // ),
// };

// const DrawerExample = createDrawerNavigator(
//   {
//     Inbox: {
//       path: '/',
//       screen: InboxStack,
//     },
//     Drafts: {
//       path: '/sent',
//       screen: DraftsStack,
//     },
//   },
//   {
//     initialRouteName: 'Drafts',
//     contentOptions: {
//       activeTintColor: '#e91e63',
//     },
//   }
// );

// // export default DrawerExample;
// export default createAppContainer(DrawerExample);
