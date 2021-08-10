//sorter will sort courses on the basis of other course type name
import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COURSE, physicalArray, onlineArray} from './Course';

export default class Sorter {
  state = {
    arr: Array,
  };
  constructor() {
    super();
    this.state = {
      arr: [],
    };
  }
  render() {
    let newArr = this.state.arr;

    for (let index = 0; index < COURSE.length; index++) {
      if (!this.state.arr.includes(COURSE.OtherCourseTypeName)) {
        newArr.push(COURSE.OtherCourseTypeName);
      }
      console.log(this.arr);
    }
    this.setState({arr: newArr});
    return (
      <View>
        <Text>{COURSE.length}</Text>
      </View>
    );
  }
}
