import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { WebView } from "react-native-webview";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ height: 250, backgroundColor: 'white' }}>
        <WebView
          style={{ marginTop: 15, height: 250, width: '100%' }}
          source={{ html: `<iframe width="560" height="250" src="${item.video.embed_url}" frameborder="0" allowfullscreen></iframe>` }}
        />
      </View>
    )
  }

  render() {
    const { navigation } = this.props;
    const result = navigation.getParam('result');

    return (
      <ScrollView>

        <FlatList
          data={result.videos}
          keyExtractor={(item, index) => index}
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}

export default Result;