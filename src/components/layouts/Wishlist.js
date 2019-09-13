import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-community/async-storage";

import KostItem from "../Kos/KosItem";
import { primaryColor, bgColor } from "../../api/constans";
import { getWishlists } from "../../api/explore";

class Wishlist extends Component {
  state = {
    wishlist: undefined
  };

  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem("@token");
      const response = await getWishlists(token);
      if (response) {
        this.setState({ wishlist: response.data });
      }
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const { height } = Dimensions.get("screen");
    if (this.state.wishlist) {
      if (this.state.wishlist.length > 0) {
        return (
          <View style={{ flex: 1 }}>
            <FlatList
              style={{ height: height }}
              data={this.state.wishlist}
              extraData={this.state}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item, index }) => {
                return (
                  <KostItem
                    data={item.house}
                    wishlistId={item.id}
                    wishlist={true}
                  />
                );
              }}
            />
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <Icon
              name="heart-multiple"
              size={100}
              style={{ color: primaryColor }}
            />
            <Text style={styles.info}>Kamu belum memiliki wishlist</Text>
          </View>
        );
      }
    } else {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={primaryColor} size={50} />
        </View>
      );
    }
  }
}

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: bgColor
  },
  info: {
    textAlign: "center",
    lineHeight: 20
  }
});
