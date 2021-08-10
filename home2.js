import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {COURSE} from './Course';
export default class Home extends React.Component {
  constructor() {
    super();

    // this.physicalArray = [];
    // this.onlineArray = [];
    // this.newArray = COURSE;
  }

  render() {
    // const allPress = () => {
    //   COURSE.map(item => {
    //     if (item.OtherCourseTypeName == 'Physical') {
    //       console.log('hello');
    //       this.physicalArray.push(item);
    //     } else {
    //       this.onlineArray.push(item);
    //     }
    //   });
    //   console.log('allpress is pressed');
    // };

    // const renderItem = ({item}) => (
    //   <View style={styles.item}>
    //     <Text style={styles.title}>{'Course Name : ' + item.CourseName}</Text>
    //     <Text style={styles.title}>
    //       {'Description: ' + item.CourseDetailedDescription}
    //     </Text>
    //     <Text style={styles.title}>
    //       {'Standard Price : ' + item.StandardPrice}
    //     </Text>
    //     <Text style={styles.title}>{'Member Price : ' + item.MemberPrice}</Text>
    //     <Text style={styles.title}>{'Type Name: ' + item.CourseTypeName}</Text>
    //     <Text style={styles.title}>
    //       {'Other Type Name : ' + item.OtherCourseTypeName}
    //     </Text>
    //   </View>
    // );

    const onPhysicalPress = () => {
      return console.log(this.physicalArray + this.physicalArray.length);
    };
    const onOnlinePress = () => {
      return console.log(this.onlineArray + this.onlineArray.length);
    };

    return (
      <View style={styles.container}>
        <View style={styles.topButton}>
          <TouchableOpacity onPress={this.allPress}>
            <Text>All ({COURSE.length})</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPhysicalPress}>
            <Text>Physical ({this.state.physicalArray.length})</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onOnlinePress}>
            <Text>Online ({this.state.onlineArray.length})</Text>
          </TouchableOpacity>
        </View>
        <List />
      </View>
    );
  }
}

class List extends Component {
  allPress = () => {
    COURSE.map(item => {
      if (item.OtherCourseTypeName == 'Physical') {
        console.log('hello');
        this.physicalArray.push(item);
      } else {
        this.onlineArray.push(item);
      }
    });
    console.log('allpress is pressed');
  };

  constructor() {
    this.state = {
      physicalArray: [],
      onlineArray: [],
      newArray: COURSE,
    };
  }
  render() {
    const renderItem = ({item}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{'Course Name : ' + item.CourseName}</Text>
        <Text style={styles.title}>
          {'Description: ' + item.CourseDetailedDescription}
        </Text>
        <Text style={styles.title}>
          {'Standard Price : ' + item.StandardPrice}
        </Text>
        <Text style={styles.title}>{'Member Price : ' + item.MemberPrice}</Text>
        <Text style={styles.title}>{'Type Name: ' + item.CourseTypeName}</Text>
        <Text style={styles.title}>
          {'Other Type Name : ' + item.OtherCourseTypeName}
        </Text>
      </View>
    );

    return (
      <View>
        <FlatList
          data={this.newArray}
          renderItem={renderItem}
          keyExtractor={item => item.CourseId}
        />
        <Text>hello</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  topButton: {
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
  },
});
