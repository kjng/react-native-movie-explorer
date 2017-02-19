import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, ListView } from 'react-native';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Row 1', 'Row 2', 'Row 3', 'Row 4'])
    };
  }

  render() {
    return (
      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (<Text>{rowData}</Text>)}
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
  }
});