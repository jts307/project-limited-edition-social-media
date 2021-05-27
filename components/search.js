import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

// Some code refactored from previous labs
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchterm: '' };
    this.onInputChange = this.onInputChange.bind(this); 
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Search
        </Text>
        <input onChange={this.onInputChange} value={this.state.searchterm} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
});

export default Search;