//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

// create a component
class CardScroll extends Component {
  render() {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={this.props.item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.kotaItem}>
            <Image
              source={{ uri: item.image }}
              style={[styles.image, { ...this.props.style }]}
            />
            <Text style={styles.namaKota}>{item.nama}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  kotaText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000"
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5
  },
  kotaItem: {
    marginTop: 20,
    marginRight: 10
  },
  namaKota: {
    color: "#2c3e50",
    textAlign: "center",
    position: "absolute",
    top: 125,
    left: 10,
    color: "#fff"
  },
  kotaContainer: {
    flexDirection: "row"
  }
});

//make this component available to the app
export default CardScroll;
