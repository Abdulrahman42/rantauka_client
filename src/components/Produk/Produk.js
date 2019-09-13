import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

class Produk extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <Text style={styles.header}>Kost Saya</Text>
        <View style={styles.produkContainer}>
          <View style={styles.produkItem}>
            <Ionicons style={styles.icon} name="md-contacts" size={25} />
            <Text style={styles.text}>Kontak</Text>
          </View>
          <View style={styles.produkItem}>
            <Ionicons style={styles.icon} name="ios-cart" size={25} />
            <Text style={styles.text}>Tagihan</Text>
          </View>
          <View style={styles.produkItem}>
            <Ionicons style={styles.icon} name="md-settings" size={25} />
            <Text style={styles.text}>Komplain</Text>
          </View>
          <View style={styles.produkItem}>
            <Ionicons style={styles.icon} name="ios-briefcase" size={25} />
            <Text style={styles.text}>Kios</Text>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20
  },
  header: {
    color: "#2c3e50",
    fontSize: 16,
    fontWeight: "400"
  },
  produkContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center"
  },
  produkItem: {
    padding: 10,
    margin: 3,
    alignItems: "center"
  },
  icon: {
    color: "#2980b9"
  },
  text: {
    color: "#2c3e50"
  }
});

//make this component available to the app
export default Produk;
