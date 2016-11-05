import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  
  navigate(routeName, userData) {
    if (this.props.lesson && routeName === 'Lesson') {
      return
    }
    if (this.props.profile && routeName === 'Profile') {
      return
    }
      this.props.navigator.push({
        name:routeName,
        passProps: {
        user: userData
        }
      });
  }

  render() {
    const {  footerStyle, lightTextStyleLeft, lightTextStyleRight, lightTextStyleMiddle } = styles;
    return (
    <View style={footerStyle}>
      <Text onPress={this.navigate.bind(this, 'LessonList', this.props.user)} style={lightTextStyleLeft}>Lessons</Text>
      <Text onPress={this.navigate.bind(this, 'Home')}  style={lightTextStyleMiddle}>Log Out</Text>
      <Text onPress={this.navigate.bind(this, 'Profile', this.props.user)} style={lightTextStyleRight}>Profile</Text>
    </View>
    )
  }
};

const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'

const styles = {
  footerStyle: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#FA848A',
    height: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  lightTextStyleLeft: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightTextStyleRight: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightTextStyleMiddle: {
    paddingRight: 40,
    paddingLeft: 40,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',   
  }
}

export default Footer;
