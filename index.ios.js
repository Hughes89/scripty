import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
  Navigator
} from 'react-native';
import Header from './src/components/header';
import LessonTitleCard from './src/components/lessonTitleCard';
import LessonTitleCardList from './src/components/LessonTitleCardList';
import Login from './src/components/login';
import Lesson from './src/components/Lesson';
import LessonComplete from './src/components/LessonComplete';
import Profile from './src/components/profile';
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';



class scripty extends Component {

  renderScene(route, navigator) {
    const { name, passProps } = route;
    if (name === 'LessonList') {
      return <LessonTitleCardList navigator={navigator} {...passProps} />
    } else if (name === 'Home') {
      return <Login navigator={navigator} />
    } else if (name === 'Lesson') {
      return <Lesson navigator={navigator} {...passProps} />
    } else if (name === 'LessonComplete') {
      return <LessonComplete navigator={navigator} {...passProps} />
    } else if (name === 'Profile') {
      return <Profile navigator={navigator} {...passProps} />
    } else if (name === 'SignUp') {
      return <SignUpForm navigator={navigator} {...passProps} />
    } else if (name === 'LogIn') {
      return <SignInForm navigator={navigator} {...passProps} />
    }
  }

  render() {
    return (
      <Navigator
      style={{ backgroundColor: 'white', }}
      navigationBar={<Header />}
      initialRoute={{ name:'Home' }}
      renderScene={this.renderScene}
      />
    )
  }
};



AppRegistry.registerComponent('scripty', () => scripty);






