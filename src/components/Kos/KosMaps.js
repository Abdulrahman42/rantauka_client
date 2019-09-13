//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import Maps from "../Maps/Maps";

// create a component
class KosMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMapReady: false,
      region: {
        latitude: parseFloat(props.kostList.latitude),
        longitude: parseFloat(props.kostList.longitude),
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
    };
  }

  render() {
    return (
      <View style={[styles.container, { display: this.props.display }]}>
        <Maps region={this.state.region} height={230} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 230
  }
});

//make this component available to the app
export default KosMaps;
