import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Header from './Header';
import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import contactIconS from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';

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
        const { iconStyle } = styles;
        return (
            <View style={styles.container}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
                        badgeText="1"
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
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
    iconStyle: {
        width: 20,
        height: 20,
    },
});
