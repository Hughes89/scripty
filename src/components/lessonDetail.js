import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight, ScrollView } from 'react-native';




const lessonDetail = ({ lessonTitle, navigator, lessonId, user, lesson}) => {
  const { viewStyle, lightTextStyle, cardStyle, profileText, profileTitle } = styles;

  const navigate = (routeName) => {
    navigator.push({
      name:routeName,
      passProps: {
        id: lessonId,
        lessonTitle: lessonTitle,
        user: user
      }
    });
  };


  var lessonInfo;
  const completed = user.lessonsCompleted.some(lesson => {
    if(lesson.lessonId === lessonId){
      lessonInfo = lesson;
      return true;
    }
    return false;
  });

  //console.log(lesson)


  return (
    <ScrollView contentContainerStyle={viewStyle}>
      <Text style={profileTitle}>{lessonTitle}</Text>
      <Text style={profileTitle}>Language: {lesson.type}</Text>
      <Text style={profileText}>{lesson.description}</Text>
      <TouchableHighlight style={cardStyle} onPress={navigate.bind(this, 'Lesson')} underlayColor={grey}>
          <Text style={lightTextStyle}>Start Lesson</Text>
      </TouchableHighlight>
    </ScrollView>
  )
};


const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'
const {width, height} = Dimensions.get('window');

const styles = {
  viewStyle: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  cardStyle: {
    backgroundColor: coral,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    height: 60,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,

    borderRadius: 5,
  },
  lightTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
    profileText: {
    color: '#1c1c1c',
    fontSize: 16,
    padding: 5
  },
    profileTitle: {
    color: '#1c1c1c',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5
  },
}


export default lessonDetail;





