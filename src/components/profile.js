import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import LessonTitleCard from './lessonTitleCard';
import Footer from './footer'

class LessonTitleCardList extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { viewStyle, footerStyle, profileText } = styles;
    return (
      <View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={viewStyle} >
      <Text style={profileText}>Username: {this.props.user.username}</Text>
      <Text style={profileText}>Score: {this.props.user.score}</Text>
      <Text style={profileText}>Completed Lessons: </Text>
      {
        this.props.user.lessonsCompleted.map(lesson => {
          return <Text style={profileText}>{lesson.title}</Text>
        })
      }
      </ScrollView>
    <Footer 
      user={this.props.user}
      lesson={false}
      profile={true}
      navigator={this.props.navigator} />
    </View>
    )
  }
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: 'white',
    height: Dimensions.get("window").height,
  },
  profileText: {
    color: '#1c1c1c',
    fontSize: 20,
    padding: 10
  }
}

export default LessonTitleCardList;
