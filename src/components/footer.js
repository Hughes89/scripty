import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  
  navigate(routeName, userData) {
      this.props.navigator.push({
        name:routeName,
        passProps: {
        user: userData
        }
      });
  }

  renderProfileFooter() {
    const {  lightTextStyle, pinkCardStyle, cardStyle } = styles;
    if (this.props.lesson) {
      return (
        <TouchableHighlight onPress={this.navigate.bind(this, 'Profile', this.props.user)} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
          <Text style={lightTextStyle}>Profile</Text>
        </TouchableHighlight>
      )
    }
  }

  renderLessonFooter() {
    const {  lightTextStyle, pinkCardStyle, cardStyle } = styles;
    if (this.props.profile) {
      return (
        <TouchableHighlight onPress={this.navigate.bind(this, 'LessonList', this.props.user)} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
          <Text style={lightTextStyle}>Lessons</Text>
        </TouchableHighlight>
      )
    }

  }

  render() {
    const {  footerStyle, lightTextStyle } = styles;
    return (
    <View style={footerStyle}>
    {this.renderLessonFooter()}
    {this.renderProfileFooter()}
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
  lightTextStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    width: Dimensions.get("window").width - 40,
    borderRadius: 5,
    position: 'relative',

  },
  pinkCardStyle: {
    backgroundColor: coral,
  },
}

export default Footer;
