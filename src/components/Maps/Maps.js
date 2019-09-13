import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMapReady: false,
      region: { ...this.props.region }
    };
  }

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  };

  render() {
    return (
      <MapView
        onPress={e => console.log(e.nativeEvent)}
        style={{ height: this.props.height }}
        provider={"google"}
        mapType="standard"
        showsScale
        showsCompass
        showsPointsOfInterest
        onRegionChangeComplete={region =>
          this.props.changeRegionScroll
            ? this.props.changeRegionScroll(region)
            : null
        }
        showsBuildings
        region={{
          ...this.props.region,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03
        }}
        onLayout={this.onMapLayout}
      >
        {this.state.isMapReady && (
          <MapView.Marker
            title="Lokasi"
            coordinate={this.props.region}
            draggable={this.props.draggable ? true : false}
            onDragEnd={e => this.props.changeRegion(e.nativeEvent)}
          />
        )}
      </MapView>
    );
  }
}

export default Maps;
