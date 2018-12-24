import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({ item }) => {
    return (
      // <Text>{item.video.title}</Text>
      <Image
        style={{ width: 330, height: 205 }}
        source={{ uri: item.video.default_thumb }}
      />
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