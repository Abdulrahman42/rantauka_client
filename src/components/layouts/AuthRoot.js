import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";

import { theme } from "../../api/constans";

class Root extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Ionicons name="ios-lock" size={130} color="#3498db" />
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              Kamu belum login, yuk login untuk menikmati berbagai fitur dari
              Rantauka
            </Text>
            <Button
              style={styles.buttonLogin}
              mode="contained"
              onPress={() => this.props.navigation.navigate("Login")}
            >
              LOGIN
            </Button>
            <View style={{ padding: 10 }}>
              <Text style={styles.info}>Atau</Text>
            </View>
            <Button
              style={styles.buttonRegister}
              onPress={() => this.props.navigation.navigate("Register")}
              mode="contained"
            >
              Signup
            </Button>
          </View>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  infoContainer: {
    padding: 35
  },
  info: {
    textAlign: "center",
    lineHeight: 20
  },
  buttonLogin: {
    marginTop: 30,
    backgroundColor: "#27ae60"
  },
  buttonRegister: {
    backgroundColor: "#2980b9"
  }
});

export default Root;
