import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  StyleSheet
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Icons from "react-native-vector-icons/Ionicons";

import { primaryColor } from "../../api/constans";
import { getToken } from "../../api/explore";

export default class Wellcome extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    try {
      let userToken = await AsyncStorage.getItem("@token");
      if (userToken) {
        const response = await getToken(userToken);
        userToken = response.data.token;
        await AsyncStorage.setItem("@token", userToken);
        this.props.navigation.navigate("Logged");
      } else {
        this.props.navigation.navigate("Guest");
      }
    } catch (err) {
      await AsyncStorage.clear();
      this.props.navigation.navigate("Guest");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
        <View style={styles.iconContainer}>
          <Icons name={"md-rocket"} size={130} style={styles.icon} />
          <Text style={styles.brand}>Rantauka</Text>
          <ActivityIndicator size={50} color={"#fff"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: "#fff"
  },
  brand: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 3,
    marginBottom: 20
  }
});
