import React from 'react';
import { StyleSheet, View } from 'react-native';
import Collection from './Collection';
import Category from './Category';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home Screen',
    };
    render() {
        return (
        <View style={styles.container}>
            <Collection />
            <Category />
        </View>
        );
    }
}

module.exports = Home;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#DBDBD8',
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
