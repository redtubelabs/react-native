import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet } from 'react-native';
import Video from 'react-native-video';

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
        <Video
          source={{ uri: "https://embed.redtube.com/?id=235504" }}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}                                      // Store reference
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onError={this.videoError}               // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        />
        {/* <FlatList
          data={result.videos}
          keyExtractor={(item, index) => index}
          renderItem={this.renderItem}
        /> */}
      </ScrollView>
    );
  }
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Result;