import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

class ProdukMenuItem extends Component {
  render() {
    const { icon, nama } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, { marginBottom: this.props.marginBottom }]}
        onPress={this.props.handlePress}
      >
        <Card>
          <View style={styles.menuItemContainer}>
            <Ionicons style={styles.icon} name={icon} size={26} />
            <Text style={styles.menuName}>{nama}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0
  },
  menuItemContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center"
  },
  icon: {
    color: "#2980b9"
  },
  menuName: {
    paddingLeft: 10,
    fontSize: 16,
    color: "#2c3e50"
  }
});

export default ProdukMenuItem;
