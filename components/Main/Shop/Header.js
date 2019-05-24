import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        const { wrapper, topLine, bottomLine, titleStyle, iconStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={topLine}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}> Wearing a Dress </Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput 
                    style={bottomLine} 
                    placeholder="What do you want to buy?"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    topLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomLine: {
        height: height / 23,
        backgroundColor: '#FFF',
        paddingLeft: 10
    },
    titleStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 20
    },
    iconStyle: {
        width: 25,
        height: 25
    }
});
