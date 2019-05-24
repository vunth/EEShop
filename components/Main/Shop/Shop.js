import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Button } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';

const { height } = Dimensions.get('window');
class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' };
    }
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        const { open } = this.props;
        return (
            // <View style={styles.container}>
            //     <Text style={styles.welcome}>Welcome to Shop component!</Text>
            //     <Button
            //         title="Open Menu By Button"
            //         onPress={() => open()}
            //     />
            // <TouchableOpacity onPress={this.openMenu.bind(this)}>
            //     <Text>Open Menu By Touchable</Text>
            // </TouchableOpacity>
            // </View>
            <View style={styles.container}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={this.openMenu.bind(this)}>
                        <Text>Open Menu By Touchable</Text>
                    </TouchableOpacity>
                    <Button
                        title="Open Menu"
                        onPress={() => open()}
                    />
                </View>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

module.exports = Shop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    topView: {
        height: height / 8
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
