import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { primaryColor } from "../../api/constans";

class Filter extends Component {
  render() {
    const { status, title } = this.props;
    return (
      <View>
        <View style={styles.fasilitasItem}>
          <Checkbox
            onPress={() => this.props.handleFasilitas(this.props.fasilitas.id)}
            status={status}
            color={primaryColor}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fasilitasItem: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    color: "#000"
  }
});

export default Filter;
