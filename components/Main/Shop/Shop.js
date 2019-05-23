import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

class Shop extends React.Component {
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        const { open } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Shop component!</Text>
                <Button
                    title="Open Menu By Button"
                    onPress={() => open()}
                />
                <TouchableOpacity onPress={this.openMenu.bind(this)}>
                    <Text>Open Menu By Touchable</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = Shop;

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
