import React from 'react';
import { StyleSheet, Platform, Text, View, Button } from 'react-native';
import Menu from './Menu/Menu';
import Shop from './Shop/Shop';
import Drawer from 'react-native-drawer';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
class Main extends React.Component {
    // static navigationOptions = {
    //     title: 'Main Screen',
    // };

    closeControlPanel = () => {
      this.drawer.close();
    };
    openControlPanel = () => {
      this.drawer.open();
    };

    render() {
        // const { navigate } = this.props.navigation;
        return (
        // <View style={styles.container}>
        //     <Text style={styles.welcome}>Welcome to Home component!</Text>
        //     <Text style={styles.instructions}>To get started, edit App.js</Text>
        //     <Text style={styles.instructions}>{instructions}</Text>
        //     <Button
        //         title="Go to Authentication Screen"
        //         onPress={() => navigate('Authentication', { name: 'Hoang Vu' })}
        //     />
        // </View>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<Menu />}
          openDrawerOffset={0.4}
          tapToClose
        >
          <Shop open={this.openControlPanel.bind(this)} />
        </Drawer>
        );
    }
}

module.exports = Main;
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
