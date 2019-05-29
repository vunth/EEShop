import React from 'react';
import { 
  StyleSheet, Dimensions, Text, View, 
  TouchableOpacity, Image, TextInput
} from 'react-native';
import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

class Authentication extends React.Component {
  static navigationOptions = {
    title: 'Authentication Screen',
  };
  constructor(props) {
    super(props);
    this.state = { isSignIn: true };
  }
  goBackToMain() {
    const { navigation } = this.props;
    navigation.goBack();
  }
  signIn() {
    this.setState({ isSignIn: true });
  }
  signUp() {
    this.setState({ isSignIn: false });
  }
  render() {
    const {
      container, headerContainer, titleStyle, iconStyle, inputContainer, 
      controlContainer, textActiveButton, textInActiveButton, input, 
      signInButton, signUpButton, signInNowButton, textSignInNowButton
    } = styles;
    const signInJSX = (
      <View style={inputContainer}>
          <TextInput 
            style={input} 
            placeholder="Enter your email"
          />
          <TextInput 
            style={input} 
            placeholder="Enter your password"
          />
          <TouchableOpacity onPress={this.props.onOpen} style={signInNowButton}>
            <Text style={textSignInNowButton}> SIGN IN NOW </Text>
          </TouchableOpacity>
        </View>
    );
    const signUpJSX = (
      <View style={inputContainer}>
          <TextInput 
            style={input} 
            placeholder="Enter your name"
          />
          <TextInput 
            style={input} 
            placeholder="Enter your email"
          />
          <TextInput 
            style={input} 
            placeholder="Enter your password"
          />
          <TextInput 
            style={input} 
            placeholder="Re-enter your password"
          />
          <TouchableOpacity onPress={this.props.onOpen} style={signInNowButton}>
            <Text style={textSignInNowButton}> SIGN UP NOW </Text>
          </TouchableOpacity>
        </View>
    );
    const { isSignIn } = this.state;
    const mainJSX = isSignIn ? signInJSX : signUpJSX;
    return (
      <View style={container}>
        <View style={headerContainer}>
          <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
            <Image source={icBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}> Wearing a Dress </Text>
          <Image source={icLogo} style={iconStyle} />
        </View>
        {mainJSX}
        <View style={controlContainer}>
          <TouchableOpacity onPress={this.signIn.bind(this)} style={signInButton}>
            <Text style={isSignIn ? textActiveButton : textInActiveButton}> SIGN IN </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.signUp.bind(this)} style={signUpButton}>
            <Text style={isSignIn ? textInActiveButton : textActiveButton}> SIGN UP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

module.exports = Authentication;
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#3EBA77',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    width,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 25
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  controlContainer: {
    flexDirection: 'row',
  },
  signInButton: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 15,
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginRight: 1,
  },
  signUpButton: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 15,
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 1,
  },
  textActiveButton: {
    color: '#3EBA77',
  },
  textInActiveButton: {
    color: '#D7D7D7',
  },
  inputContainer: {
    // backgroundColor: 'black',
  },
  input: {
    height: 50,
    width: width - 60,
    backgroundColor: '#FFF',
    paddingLeft: 30,
    borderRadius: 20,
    marginBottom: 10,
  },
  signInNowButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSignInNowButton: {
    // fontFamily: 'Avenir',
    fontWeight: '500',
    color: '#FFF',
  },
  separateLine: {
    height: 10, 
    width,
  }
});
