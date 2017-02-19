import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

const routes = [
  {title: 'First Scene', index: 0},
  {title: 'Second Scene', index: 1},
  {title: 'Third Scene', index: 2},
];

export default class MovieExplorer extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={routes[0]}
        renderScene={(route, navigator) =>
          <View style={styles.content}>
            <TouchableHighlight onPress={() => {
                if (route.index < 2) {
                  navigator.push(routes[route.index+1])
                } else {
                  navigator.resetTo(routes[0]);
                }
              }}>
              <Text>Hello {route.title}</Text>
            </TouchableHighlight>
          </View>
        }
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
                return (<Text style={styles.title}>Navigation Bar</Text>);
              }
            }}
            style={{backgroundColor: 'azure'}}
          />
        }
      ></Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navText: {
    padding: 15
  },
  title: {
    padding: 10,
    fontSize: 15
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('MovieExplorer', () => MovieExplorer);
