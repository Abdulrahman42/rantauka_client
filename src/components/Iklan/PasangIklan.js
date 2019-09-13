import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Provider as PaperProvider } from "react-native-paper";

import { theme, primaryColor } from "../../api/constans";

class LoginPemilik extends Component {
  handleIklan = async () => {
    try {
      const userToken = await AsyncStorage.getItem("@token");
      {
        userToken
          ? this.props.navigation.navigate("Ads")
          : this.props.navigation.navigate("Login");
      }
    } catch (err) {
      this.props.navigation.navigate("Login");
    }
  };

  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Tertarik mengiklankan kosmu?</Text>
          </View>
          <TouchableOpacity onPress={this.handleIklan}>
            <View style={[styles.button, { backgroundColor: primaryColor }]}>
              <Text style={styles.link}>Pasang Iklan</Text>
            </View>
          </TouchableOpacity>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center"
  },
  textContainer: {
    flex: 1
  },
  button: {
    padding: 10,
    borderRadius: 5
  },
  text: {
    color: "#2c3e50",
    fontWeight: "400"
  },
  link: {
    color: "#fff"
  }
});

export default LoginPemilik;
