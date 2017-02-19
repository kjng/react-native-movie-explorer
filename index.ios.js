import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  StatusBar,
  TouchableHighlight
} from 'react-native';
import ListScreen from './ListScreen.js';
import DetailScreen from './DetailScreen.js';

const routes = [
  {title: 'First Scene', index: 0},
  {title: 'Second Scene', index: 1},
  {title: 'Third Scene', index: 2},
];

export default class MovieExplorer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#3333ff'
          barStyle='light-content'
        />
        <Navigator
          initialRoute={routes[0]}
          renderScene={(route, navigator) => {
            switch(route.index) {
              case 0:
                return (
                  <ListScreen
                    navigator={navigator}
                    route={routes[route.index]}
                    {...route.passProps}
                  />)
              case 1:
                return (
                  <DetailScreen
                    navigator={navigator}
                    route={routes[route.index]}
                    {...route.passProps}
                  />)
            }
          }}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) => {
                  return (<Text style={styles.navText}>Cancel</Text>);
                },
                RightButton: (route, navigator, index, navState) => {
                  return (<Text style={styles.navText}>Done</Text>);
                },
                Title: (route, navigator, index, navState) => {
                  return (<Text style={styles.title}>Movie Explorer</Text>);
                }
              }}
              style={{backgroundColor: '#3333ff'}}
            />
          }
        ></Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navText: {
    color: 'white',
    padding: 15
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('MovieExplorer', () => MovieExplorer);
