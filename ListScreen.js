import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, ListView, TextInput } from 'react-native';
import API from './api.js';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      search: '',
      dataSource: this.ds.cloneWithRows([])
    };
    API.search('harry potter').then(data => {
      this.setState({dataSource: this.ds.cloneWithRows(data)});
    });
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    if (this.state.search.length) {
      API.search(this.state.search).then(data => {
        if (data) {
          this.setState({dataSource: this.ds.cloneWithRows(data), search: ''});
        } else {
          this.setState({search: ''});
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchBox}
            value={this.state.search}
            onChangeText={(search) => {this.setState({search})}}
            onSubmitEditing={this.handleSearch}
          />
          <TouchableOpacity style={styles.searchButton} onPress={this.handleSearch}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listViewWrapper}>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => {
              return (
                <TouchableOpacity onPress={() => this.props.navigator.push({index: 1, passProps: {imdbID: rowData.imdbID}})}>
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
                  </View>
                </TouchableOpacity>)
            }}
            renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => (
              <View key={rowID} style={{height: 1, backgroundColor: 'black'}} />
            )}
          />
        </View>
      </View>
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
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  searchBox: {
    flex: 4,
    borderWidth: 1,
    padding: 5,
    marginRight: 10
  },
  searchButton: {
    borderWidth: 1,
    backgroundColor: '#0066ff'
  },
  searchText: {
    padding: 5,
    color: 'white',
    flex: 1,
    marginTop: 5
  },
  listViewWrapper: {
    flex: 15
  }
});