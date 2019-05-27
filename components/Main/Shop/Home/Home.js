import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home Screen',
    };
    render() {
        return (
        <ScrollView style={styles.container}>
            {/* <Collection />
            <Category /> */}
            <TopProduct />
        </ScrollView>
        );
    }
}

module.exports = Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
