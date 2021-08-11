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
import {COURSE, physicalArray, onlineArray, tab} from './Course';
export default class Home extends React.Component {
  state = {
    newArray: [],
    arr: Array,
  };
  constructor() {
    super();
    this.state = {
      newArray: COURSE,
      arr: [],
    };
    console.log(tab);
  }
  // handler = () => {
  //   let newArr = this.state.arr;

  //   for (let index = 0; index < COURSE.length; index++) {
  //     if (!this.state.arr.includes(COURSE.OtherCourseTypeName)) {
  //       newArr.push(COURSE.OtherCourseTypeName);
  //     }
  //   }
  //   this.setState({arr: newArr});
  //   console.log("hello");
  // };
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
    const tabsList = tab.map((data) => {
      let count = 0;
      return (
        <TouchableOpacity onPress={() => {
          this.setState({newArray: physicalArray});
        }} key={data}><Text style={styles.text}>  {COURSE.forEach(element => {
          if (element.OtherCourseTypeName == data) {
            count+=1;
          }
        })}{data} ({count}) </Text></TouchableOpacity>
      )
    })

    return (
      <View style={styles.container}>
        <View style={styles.topButton}>
          <TouchableOpacity
            onPress={() => {
              this.setState({newArray: COURSE});
            }}>
            <Text style={styles.text}>All ({COURSE.length})</Text>
          </TouchableOpacity>
          {tabsList}
        </View>
        <FlatList
          data={COURSE}
          renderItem={renderItem}
          keyExtractor={item => item.CourseId}
        />
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
    fontSize: 25,
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
  text: {
    fontSize: 25,
  },
});
