import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar, Card, Checkbox } from "react-native-paper";
import IonicIcons from "react-native-vector-icons/Ionicons";

import AsyncStorage from "@react-native-community/async-storage";

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@token");
      this.props.navigation.navigate("Guest");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { checked } = this.state;
    return (
      <View>
        <Card style={styles.container}>
          <Card.Content style={{ paddingVertical: 0 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, marginHorizontal: 5 }}>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Notifikasi
                  </Text>
                </View>
                <View style={{ flex: 1, marginTop: 30 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 5
                    }}
                  >
                    <Text style={{ alignItems: "flex-start", flex: 1 }}>
                      Rekomendasi via email
                    </Text>
                    <Checkbox
                      color="#2980b9"
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 25
                      }}
                    >
                      <Text style={{ alignItems: "flex-start", flex: 1 }}>
                        Notifikasi chat
                      </Text>
                      <Checkbox
                        color="#2980b9"
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          this.setState({ checked: !checked });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>
        <TouchableOpacity onPress={() => this.handleLogout()}>
          <Card style={styles.container2}>
            <Card.Content style={{ paddingVertical: 0 }}>
              <View
                style={{
                  marginVertical: 10,
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <IonicIcons name="ios-log-out" size={25} />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    marginLeft: 15,
                    alignItems: "flex-end",
                    flex: 1
                  }}
                >
                  Logout Akun
                </Text>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginHorizontal: 20,
    marginVertical: 20
  },

  container2: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 20
  },
  header: {
    backgroundColor: "#2980b9"
  }
});
