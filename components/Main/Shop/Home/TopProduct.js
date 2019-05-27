import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, Image } from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

export default class TopProduct extends Component {
    render() {
        const { 
            container, titleContainer, title, bodyContainer, 
            productContainer, productImage, productName, productPrice,
            separateLine
        } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={bodyContainer}>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>TOP PRODUCT</Text>
                        <Text style={productPrice}>400$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>TOP PRODUCT</Text>
                        <Text style={productPrice}>300$</Text>
                    </View>
                    <View style={separateLine} />
                    <View style={productContainer}>
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>TOP PRODUCT</Text>
                        <Text style={productPrice}>400$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>TOP PRODUCT</Text>
                        <Text style={productPrice}>300$</Text>
                    </View>
                    <View style={separateLine} />
                    <View style={productContainer}>
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>TOP PRODUCT</Text>
                        <Text style={productPrice}>400$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>TOP PRODUCT</Text>
                        <Text style={productPrice}>300$</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20,
        fontFamily: 'Avenir',
    },
    bodyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10,
    },
    productContainer: {
        width: productWidth,
        backgroundColor: '#FFF',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    productImage: {
        width: productWidth,
        height: productHeight,
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        // color: '#D3D3CF',
        fontWeight: '500'
    },
    productPrice: {
        
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90',
        marginBottom: 5
    },
    separateLine: {
        height: 10, 
        width,
    }
});
