import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import API from './api.js';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    API.view(this.props.imdbID).then(data => {
      this.setState(data);
    });
  }

  separator() {
    return (
      <View style={{height: 2, backgroundColor: '#cccccc', marginTop: 10, marginBottom: 10}}></View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View style={{paddingBottom: 10}}>
            <Image style={styles.image} source={{uri: this.state.Poster}} />
          </View>
          <Text style={styles.subtitle}>Metascore: {this.state.Metascore}</Text>
          <Text style={styles.subtitle}>IMDB Rating: {this.state.imdbRating}</Text>
        </View>
        <View style={{flex: 2, padding: 10}}>
          <Text style={styles.title}>{this.state.Title} ({this.state.Year})</Text>
          {this.separator()}
          <Text>Genre: {this.state.Genre} ({this.state.Runtime})</Text>
          {this.separator()}
          <Text>Released: {this.state.Released} [{this.state.Rated}]</Text>
          {this.separator()}
          <Text>{this.state.Plot}</Text>
          {this.separator()}
          <Text>Director: {this.state.Director}</Text>
          {this.separator()}
          <Text>Writer: {this.state.Writer}</Text>
          {this.separator()}
          <Text>Actors: {this.state.Actors}</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 70,
    flexDirection: 'row'
  },
  image: {
    height: 175
  },
  title: {
    fontSize: 20
  }
}