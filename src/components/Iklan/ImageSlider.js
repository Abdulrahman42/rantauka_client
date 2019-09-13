//import liraries
import React, { Component } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

// create a component
class ImageSlider extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.image.map((image, id) => (
          <Image
            key={id}
            source={{
              uri: image.path,
              width: image.width,
              height: image.height
            }}
            style={{ height: 150, width: 150, marginRight: 10 }}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flexDirection: "row"
  }
});

export default ImageSlider;
