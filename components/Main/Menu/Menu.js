import React from 'react';
import { StyleSheet, Platform, Text, View, TouchableOpacity, Button } from 'react-native';

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
  gotoAuthentication() {
    const { navigate } = this.props;
    navigate('Authentication', { name: 'Hoang Vu' });
  }
  gotoChangeInformation() {
    const { navigate } = this.props;
    navigate('ChangeInformation', { name: 'Hoang Vu' });
  }
  gotoOrderHistory() {
    const { navigate } = this.props;
    navigate('OrderHistory', { name: 'Hoang Vu' });
  }
  render() {
    const { navigate } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Menu component!</Text>
        <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
          <Text>Authentication</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.gotoChangeInformation.bind(this)}>
          <Text>Change Information</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
          <Text>Order history</Text>
        </TouchableOpacity>
        <Button
          title="Open Authentication"
          onPress={() => navigate('Authentication', { name: 'Hoang Vu' })}
        />
        <Button
          title="Open Change Information"
          onPress={() => navigate('Authentication', { name: 'Hoang Vu' })}
        />
        <Button
          title="Open Order history"
          onPress={() => navigate('Authentication', { name: 'Hoang Vu' })}
        />
      </View>
    );
  }
}

module.exports = Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ac5f55',
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
