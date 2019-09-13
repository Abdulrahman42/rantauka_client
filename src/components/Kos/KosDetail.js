import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import KosMenu from "./KosMenu";
import KosView from "./KosView";
import KosMaps from "./KosMaps";
import KosHeader from "./KosHeader";
import KosDescription from "./KosDescription";
import KosMenarik from "./KosMenarik";

class KosDetail extends Component {
  constructor() {
    super();
    this.state = {
      displayFoto: "flex",
      displayMaps: "none"
    };
  }

  changePeta = () => {
    console.log("peta");
    this.setState(prevState => ({
      displayFoto: "none",
      displayMaps: "flex"
    }));
  };

  changeFoto = () => {
    this.setState(prevState => ({
      displayMaps: "none",
      displayFoto: "flex"
    }));
  };

  render() {
    const kostList = this.props.kostList;
    const { displayFoto, displayMaps } = this.state;
    return (
      <View style={styles.container}>
        <KosView display={displayFoto} kostList={kostList} />
        <KosMaps display={displayMaps} kostList={kostList} />
        <KosMenu changeFoto={this.changeFoto} changePeta={this.changePeta} />
        <KosHeader
          jenis={kostList.house_type}
          kecamatan={kostList.kecamatan}
          title={kostList.house_name}
        />
        <KosDescription kostList={kostList} />
        <KosMenarik />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

export default KosDetail;
