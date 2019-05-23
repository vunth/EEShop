import React from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
class Menu extends React.Component {
    static navigationOptions = {
        title: 'Menu Screen',
    };
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to Menu component!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      );
    }
}
  
module.exports = Menu;

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0079ca',
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
