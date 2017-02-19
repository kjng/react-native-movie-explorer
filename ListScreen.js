import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';

export default class ListScreen extends Component {
  render() {
    return (
      <View style={{padding: 100}}>
        <Text style={{fontSize: 30}}>List Screen</Text>
        <TouchableHighlight onPress={() => {
          this.props.navigator.push({index: 1, passProps: {movieName: 'Frozen'}})
        }}>
          <Text style={{fontSize: 30, padding: 10, borderWidth: 1}}>
            Go to Detail Screen
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}