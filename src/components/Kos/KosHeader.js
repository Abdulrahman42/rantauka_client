import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { primaryColor } from "../../api/constans";

class KosHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={[styles.jenisKos, { color: primaryColor }]}>
            {this.props.jenis}
          </Text>
          <Text style={styles.separated}>•</Text>
          <Text style={styles.alamat}>{this.props.kecamatan}</Text>
        </View>
        <View>
          <Text style={styles.nama}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#bbc9cd"
  },
  descriptionContainer: {
    paddingTop: 10,
    flexDirection: "row"
  },
  alamat: {
    color: "#7f8c8d",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 16
  },
  separated: {
    color: "#bdc3c7",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 20,
    top: -2
  },
  jenisKos: {
    fontWeight: "bold",
    fontSize: 16
  },
  nama: {
    color: "#2d3436",
    fontSize: 23,
    fontWeight: "500",
    marginTop: 5
  }
});

export default KosHeader;
