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
  {title: 'Movie Explorer', index: 0},
  {title: 'Details', index: 1},
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
                  if (route.index !== 0) {
                    return (
                      <TouchableHighlight onPress={() => navigator.pop()}>
                        <Text style={styles.navText}>Back</Text>
                      </TouchableHighlight>
                    );
                  }
                },
                RightButton: (route, navigator, index, navState) => {},
                Title: (route, navigator, index, navState) => {
                  console.log(route, index);
                  return (<Text style={styles.title}>{routes[route.index].title}</Text>);
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
