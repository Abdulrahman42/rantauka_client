//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";

import { primaryColor } from "../../api/constans";
import { createWistlist } from "../../api/explore";

class KosDescription extends Component {
  state = {
    heart: "heart-outline"
  };

  onWishlist = async () => {
    const token = await AsyncStorage.getItem("@token");
    const data = {
      houseId: this.props.kostList.id
    };
    if (token) {
      await createWistlist(data, token);
      this.state.heart === "heart"
        ? this.setState({
            heart: "heart-outline"
          })
        : this.setState({ heart: "heart" });
    } else {
      this.props.navigation.navigate("Login");
    }
  };

  render() {
    const kostList = this.props.kostList;
    return (
      <View style={styles.container}>
        <View style={styles.luasContainer}>
          <Text style={styles.title}>Luas Kamar</Text>
          <View style={styles.luasKamarContainer}>
            <Icon style={styles.icon} name="arrow-expand-all" size={28} />
            <Text style={styles.luasKamar}>
              {kostList.house_length} x {kostList.house_width} m
            </Text>
            <TouchableOpacity onPress={this.onWishlist}>
              <Icon
                name={this.state.heart}
                size={30}
                style={{
                  color: this.state.heart === "heart" ? "#eb4d4b" : primaryColor
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.luasContainer}>
          <Text style={styles.title}>Fasilitas kos dan Kamar</Text>
          <View style={styles.fasilitasKos}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              {kostList.facilities.map((facility, id) => (
                <View style={styles.fasilitasContainer} key={id}>
                  <Icon style={styles.icon} name={facility.code} size={28} />
                  <Text style={styles.fasilitasText}>{facility.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.luasContainer}>
          <Text style={styles.title}>Deskripsi Kos</Text>
          <Text style={styles.text}>{kostList.house_description}</Text>
        </View>
        <View style={styles.pemilikContainer}>
          <Text style={styles.infoText}>
            Data bisa berubah sewaktu-waktu, tanyakan data saat ini.
          </Text>
          <View style={styles.pemilik}>
            <Icon
              style={styles.pemilikIcon}
              name="account-card-details-outline"
              size={40}
            />
            <View style={styles.pemilikDetail}>
              <Text style={styles.pemilikText}>Pemilik Kos</Text>
              <Text style={styles.pemilikText}>{kostList.user.full_name}</Text>
              <Text style={styles.pemilikHp}>{`${kostList.user.telephone.slice(
                0,
                6
              )}xxxxxx`}</Text>
            </View>
            <View style={styles.nomorPemilik}>
              <Text
                style={styles.nomorHp}
                onPress={() => alert(kostList.user.telephone)}
              >
                Minta Nomor
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    houses: state.houses
  };
};

export default connect(mapStateToProps)(KosDescription);

const styles = StyleSheet.create({
  container: {},
  luasTitle: {},
  luasContainer: {
    padding: 20,
    paddingBottom: 0
  },
  luasKamarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  luasKamar: {
    marginLeft: 10,
    fontSize: 15,
    color: "#2c3e50",
    flex: 1
  },
  title: {
    color: "#2c3e50",
    fontSize: 15,
    fontWeight: "500"
  },

  fasilitasKos: {
    paddingTop: 20,
    marginLeft: -20,
    justifyContent: "center"
  },
  fasilitasContainer: {
    width: 90,
    justifyContent: "center"
  },
  fasilitasText: {
    textAlign: "center",
    color: "#2c3e50"
  },
  icon: {
    textAlign: "center",
    color: "#2980b9"
  },
  text: {
    color: "#2c3e50",
    marginTop: 10,
    marginBottom: 20
  },
  pemilikContainer: {
    backgroundColor: "#ecf0f1",
    padding: 20
  },
  infoText: {
    color: "#2c3e50",
    fontSize: 15
  },
  pemilikIcon: {
    color: "#2980b9",
    marginRight: 20
  },
  pemilik: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  pemilikText: {
    color: "#2c3e50",
    fontSize: 16,
    fontWeight: "500"
  },
  pemilikDetail: {
    marginLeft: 20
  },
  pemilikHp: {
    color: "#2c3e50",
    fontSize: 16,
    fontWeight: "400"
  },
  pemilikDetail: {
    flex: 1
  },
  nomorPemilik: {
    alignItems: "flex-end"
  },
  nomorHp: {
    color: "#2980b9"
  }
});
