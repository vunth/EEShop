import React from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu/Menu';
import Shop from './Shop/Shop';

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
        const { navigate } = this.props.navigation;
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
          content={<Menu navigate={navigate} />}
          openDrawerOffset={0.4}
          tapToClose
        >
          <Shop open={this.openControlPanel.bind(this)} />
        </Drawer>
        );
    }
}

module.exports = Main;
