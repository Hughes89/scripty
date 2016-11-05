import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight, ListView } from 'react-native';




const LessonTitleCard = ({ lessonTitle, navigator, lessonId, user }) => {
  const { buttonStyle, viewStyle, textStyle, circleStyle, greenCircle, yellowCircle, blueCircle } = styles;

  const navigate = (routeName, id) => {
    navigator.push({
      name:routeName,
      passProps: {
        id: id,
        lessonTitle: lessonTitle,
        user: user
      }
    })
  };

  circle = user.lessonsCompleted.some(lesson => lesson.lessonId === lessonId) ? {...circleStyle, ...greenCircle} : {...circleStyle, ...blueCircle}
  return (
    <TouchableHighlight onPress={navigate.bind(this, 'Lesson', lessonId, )} underlayColor={grey} style={buttonStyle}>
      <View style={viewStyle}>
        <View style={circle}></View>
        <Text style={textStyle}>{lessonTitle}</Text>
      </View>
    </TouchableHighlight>
  )
};


const grey = '#FAFAFA'

const styles = {
  buttonStyle: {
    backgroundColor: 'white',

    alignItems: 'center',
    flexDirection: 'row',

    height: 75,
    width: Dimensions.get("window").width - 20,
    marginTop: 0,
    borderColor: '#ecf0f1',
    borderBottomWidth: 0.5,
  },
  viewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 120,
  },
  textStyle: {
    color: '#1c1c1c',
    fontSize: 17,
  },
  circleStyle: {
    borderRadius: 100,
    height: 30,
    width: 30,
    // backgroundColor: '#4DD8F9',
    marginLeft: 20,
    marginRight: 20,
  },
  greenCircle: {
    backgroundColor: 'green'
  },
  blueCircle: {
    backgroundColor: '#4DD8F9'
  },
  yellowCircle: {
    backgroundColor: 'yellow'
  }
}


export default LessonTitleCard;





