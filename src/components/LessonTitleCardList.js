import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import LessonTitleCard from './lessonTitleCard';

const LessonTitleCardList = () => {
  const {viewStyle} = styles;
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={viewStyle} >
      <LessonTitleCard lessonTitle='Hello World!' />
      <LessonTitleCard lessonTitle='Functions' />
      <LessonTitleCard lessonTitle='For loops' />
      <LessonTitleCard lessonTitle='Objects' />
      <LessonTitleCard lessonTitle='Arrays' />
    </ScrollView>
  )
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  }
}

export default LessonTitleCardList;
