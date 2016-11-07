import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight, ScrollView } from 'react-native';
import Footer from './footer'

const languages = ({ user, navigator }) => {
  const { viewStyle } = styles;

  const navigate = (routeName, type) => {
    console.log(navigator)
    navigator.push({
      name: routeName,
      passProps: {
        user: user,
        type: type
      }
    })
  };

  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 30, flex: 9, alignItems: 'center'}}>
        <View style={{flex: 4, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'JavaScript')} style={{flex: 1}}><Text>JavaScript</Text></TouchableHighlight>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'Ruby')} style={{flex: 1}}><Text>Ruby</Text></TouchableHighlight>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'Python')} style={{flex: 1}}><Text>Python</Text></TouchableHighlight>
        </View>
        <View style={{flex: 4, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'C')} style={{flex: 1}}><Text>C</Text></TouchableHighlight>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'PHP')} style={{flex: 1}}><Text>PHP</Text></TouchableHighlight>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'Java')} style={{flex: 1}}><Text>Java</Text></TouchableHighlight>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Footer
          user={user}
          lesson={true}
          profile={false}
          leaderBoard={false}
          navigator={navigator}
        />
      </View>
    </View>
  )
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: 'white',
  }
}

export default languages;





