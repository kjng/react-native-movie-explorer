import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image, ListView } from 'react-native';
import API from './api.js';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
    API.search('harry potter').then(data => {
      this.setState({dataSource: ds.cloneWithRows(data)});
    });
  }

  render() {
    return (
      <ListView
        style={styles.container}
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {
          return (
            <View style={styles.row}>
              <View style={{flex: 3, marginTop: 5, marginBottom: 5}}>
                <Image style={styles.image} source={{uri: rowData.Poster}} />
              </View>
              <View style={{flex: 10, padding: 10, justifyContent: 'center'}}>
                <Text style={styles.movieTitle}>{rowData.Title} ({rowData.Year})</Text>
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.arrow}>></Text>
              </View>
            </View>)
        }}
        renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => (
          <View key={rowID} style={{height: 1, backgroundColor: 'black'}} />
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 65
  },
  row: {
    flexDirection: 'row',
    height: 100
  },
  image: {
    height: 90
  },
  movieTitle: {
    fontSize: 15
  },
  arrow: {
    fontSize: 20
  }
});