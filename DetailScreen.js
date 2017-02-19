import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DetailScreen extends Component {
  render() {
    return (
      <View style={{padding: 20, paddingTop: 100}}>
        <Text style={{fontSize: 30}}>
          Detail Screen: {this.props.movieName}
        </Text>
      </View>
    )
  }
}