import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import miniIcon from '../../../../media/temp/mini.jpg';

const { width, height } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        const { wrapper, textContainerStyle, textStyle, swiperContainerStyle, imageStyle, textOnImageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={textContainerStyle}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={swiperContainerStyle}>
                    <Swiper autoplay width={imageWidth} height={imageHeight}>
                        <ImageBackground source={littleIcon} style={imageStyle}>
                            <Text style={textOnImageStyle}>Maxi Dress</Text>
                        </ImageBackground>
                        <ImageBackground source={maxiIcon} style={imageStyle}>
                            <Text style={textOnImageStyle}>Maxi Dress</Text>
                        </ImageBackground>
                        <ImageBackground source={miniIcon} style={imageStyle}>
                            <Text style={textOnImageStyle}>Maxi Dress</Text>
                            </ImageBackground>
                    </Swiper>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.32,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingTop: 0,
        padding: 10,
        justifyContent: 'space-between'
    },
    textContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#9A9A9A',
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    swiperContainerStyle: {
        flex: 4,
        justifyContent: 'flex-end',
        // backgroundColor: '#b07774',
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOnImageStyle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});
