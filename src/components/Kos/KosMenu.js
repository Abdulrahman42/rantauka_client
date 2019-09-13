//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class KosMenu extends Component {
  render() {
    const { changeFoto, changePeta } = this.props;
    return (
      <View style={[styles.tabContainer, { backgroundColor: "#3293d2" }]}>
        <View style={styles.tabMenu}>
          <TouchableOpacity style={styles.iconContainer} onPress={changeFoto}>
            <Ionicons style={styles.icon} name="md-photos" size={20} />
            <Text style={styles.tabText}>Foto</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.tabMenu, { backgroundColor: "#3293d2" }]}>
          <TouchableOpacity style={styles.iconContainer} onPress={changePeta}>
            <Ionicons style={styles.icon} name="ios-pin" size={20} />
            <Text style={styles.tabText}>Peta</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  icon: {
    color: "#fff"
  },
  tabContainer: {
    flexDirection: "row",
    paddingVertical: 15
  },
  tabText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
    paddingLeft: 10
  },
  tabMenu: {
    flex: 1,
    alignItems: "center"
  },
  iconContainer: { flexDirection: "row" }
});

//make this component available to the app
export default KosMenu;
