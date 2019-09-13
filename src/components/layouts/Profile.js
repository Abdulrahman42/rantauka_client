import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-community/async-storage";

import Produk from "../../components/Produk/Produk";
import ProdukMenuItem from "../../components/Produk/ProdukMenuItem";
import { bgColor, primaryColor } from "../../api/constans";
import { getUser } from "../../api/explore";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: undefined
    };
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem("@token");
    try {
      const response = await getUser(token);
      this.setState({ user: response.data });
    } catch (err) {
      AsyncStorage.clear();
      this.props.navigation.navigate("AuthRoot");
    }
  }

  render() {
    const { user } = this.state;
    return user ? (
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Ionicons style={styles.icon} name="ios-person" size={23} />
          <Text style={styles.userName}>{user.full_name}</Text>
          <View style={styles.header} />
        </View>
        <View style={styles.container}>
          <Produk />
          <ProdukMenuItem
            icon="ios-bookmarks"
            nama="Booking List"
            handlePress={() =>
              this.props.navigation.navigate("BookingList", {
                handleBack: () => this.props.navigation.navigate("Index")
              })
            }
          />
          <ProdukMenuItem icon="ios-home" nama="Barang dan Jasa" />
          <ProdukMenuItem icon="ios-key" nama="Verifikasi Akun" />
          <ProdukMenuItem
            icon="ios-build"
            nama="Pengaturan"
            marginBottom={0.5}
            handlePress={() => this.props.navigation.navigate("Setting")}
          />
          <ProdukMenuItem
            icon="ios-call"
            nama="Hubungi Cs"
            marginBottom={0.5}
          />
          <ProdukMenuItem icon="ios-list" nama="Syarat dan Ketentuan" />
        </View>
      </ScrollView>
    ) : (
      <View style={styles.loading}>
        <ActivityIndicator color={primaryColor} size={50} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    position: "relative",
    backgroundColor: bgColor
  },
  container: {
    marginTop: 50
  },
  headerContainer: {
    padding: 80,
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: "#2980b9",
    position: "absolute",
    flexDirection: "row",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    alignItems: "center"
  },
  header: {
    flex: 1
  },
  userName: {
    color: "#fff",
    fontSize: 17,
    paddingLeft: 10
  },
  icon: {
    color: "#fff"
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Profile;
