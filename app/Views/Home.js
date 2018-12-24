import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import { purple } from '../utils/colors';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch(`https://api-redtube-proxy.mybluemix.net/?search=${this.state.searchWord}`)
      .then(res => res.json())
      .then(res => console.warn(res))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Search something porn...</Text>
        <TextInput onChangeText={(text) => this.setState({ searchWord: text })} value={this.state.searchWord} style={styles.input} />
        <View style={styles.button}>
          <Button
            title="Search"
            color={purple}
            accessibilityLabel="Search"
            onPress={this.fetchData}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8
  },
  button: {
    marginTop: 20,
    width: '90%',
    borderRadius: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
