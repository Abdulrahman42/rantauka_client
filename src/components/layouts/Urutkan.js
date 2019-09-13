//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
class Filter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Urutkan</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {}
});

//make this component available to the app
export default Filter;
