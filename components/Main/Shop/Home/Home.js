import React from 'react';
import { StyleSheet, Platform, Text, View, Button } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
class Home extends React.Component {
    static navigationOptions = {
        title: 'Home Screen',
    };
    render() {
        // const { navigate } = this.props.navigation;
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Home component!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            {/* <Button
                title="Go to Authentication Screen"
                onPress={() => navigate('Authentication', { name: 'Hoang Vu' })}
            /> */}
        </View>
        );
    }
}

module.exports = Home;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffd52e',
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
