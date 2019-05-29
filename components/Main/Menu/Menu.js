import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import profileIcon from '../../../media/temp/profile.png';

class Menu extends React.Component {
  static navigationOptions = {
    title: 'Menu Screen',
  };
  constructor(props) {
    super(props);
    this.state = { isSigned: false };
  }
  
  gotoAuthentication() {
    const { navigation } = this.props;
    navigation.navigate('Authentication', { name: 'Hoang Vu' });
  }
  gotoChangeInformation() {
    const { navigation } = this.props;
    navigation.navigate('ChangeInformation', { name: 'Hoang Vu' });
  }
  gotoOrderHistory() {
    const { navigation } = this.props;
    navigation.navigate('OrderHistory', { name: 'Hoang Vu' });
  }
  signOut() {
    
  }
  render() {
    // const { navigate } = this.props;
    const {
      profileIconStyle, signOutStateContainer, signedInStateContainer,
      button, signedInButton, textButton, textSignedInButton, usernameText
    } = styles;
    const signOutJSX = (
      <View style={signOutStateContainer}>
        <TouchableOpacity style={button} onPress={this.gotoAuthentication.bind(this)}>
          <Text style={textButton}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
    const signedInJSX = (
      <View style={signedInStateContainer}>
          <View style={{ flex: 1 }}>
            <Text style={usernameText}>Nguyen Tan Hoang Vu</Text>
          </View>
          <View style={{ flex: 19, justifyContent: 'center' }}>
            <TouchableOpacity style={signedInButton} onPress={this.gotoOrderHistory.bind(this)}>
              <Text style={textSignedInButton}>Order History</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={signedInButton} 
              onPress={this.gotoChangeInformation.bind(this)}
            >
              <Text style={textSignedInButton}>Change Information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={signedInButton} onPress={this.signOut.bind(this)}>
              <Text style={textSignedInButton}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
    const mainJSX = this.state.isSigned ? signedInJSX : signOutJSX; 
    return (
      <View style={styles.container}>
        <Image source={profileIcon} style={profileIconStyle} />
        { mainJSX }
      </View>
    );
  }
}

module.exports = Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    borderRightWidth: 3,
    borderColor: '#FFF',
    alignItems: 'center',
  },
  profileIconStyle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 30,
  },
  usernameText: {
    color: '#FFF', 
    fontFamily: 'Avenir', 
    fontSize: 20,
  },
  signOutStateContainer: {
    flex: 1,
  },
  signedInStateContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    height: 40,
    paddingHorizontal: 70,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textButton: {
    color: '#34B089',
    fontSize: 20,
    fontFamily: 'Avenir', 
  },
  signedInButton: {
    height: 40,
    width: 200,
    paddingLeft: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  textSignedInButton: {
    color: '#34B089',
    fontSize: 15,
    alignSelf: 'stretch',
  },
});
