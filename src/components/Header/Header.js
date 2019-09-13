import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class Header extends Component {
  render() {
    const { icon, iconSize, title, right, iconRight, height } = this.props;
    return (
      <View style={[styles.h1, { paddingVertical: height }]}>
        <TouchableOpacity onPress={this.props.handleIconLeft}>
          <Icon style={icon ? styles.icon : null} name={icon} size={iconSize} />
        </TouchableOpacity>
        <Text
          style={
            icon
              ? styles.headerText
              : [
                  styles.headerText,
                  { marginLeft: 15, display: title ? "flex" : "none" }
                ]
          }
        >
          {title}
        </Text>
        <Text style={styles.tanyaCs}>{right}</Text>
        <TouchableOpacity onPress={this.props.handleIconRight}>
          <Icon
            style={iconRight ? [styles.icon, { paddingRight: 5 }] : null}
            name={iconRight}
            size={iconSize}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    flexDirection: "row",
    backgroundColor: "#2980b9",
    paddingRight: 10
  },
  headerText: { flex: 1, color: "#fff", fontWeight: "500", fontSize: 16 },
  tanyaCs: { color: "#fff", fontWeight: "500", fontSize: 16 },
  icon: {
    paddingHorizontal: 10,
    color: "#fff"
  }
});

export default Header;
