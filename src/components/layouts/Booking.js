import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { Button, Checkbox } from "react-native-paper";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AsyncStorage from "@react-native-community/async-storage";
import { API_HOST } from "react-native-dotenv";
import { connect } from "react-redux";

import { primaryColor, bgColor } from "../../api/constans";
import { getBooking } from "../../_actions/booking";
import changePrice from "../../utils/changePrice";
import { createBooking } from "../../api/explore";

const { width } = Dimensions.get("screen");
class Booking extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      booking: undefined,
      tanggal: undefined,
      duration: undefined
    };
  }

  async componentDidMount() {
    const kostList = this.props.navigation.getParam("kostList");
    const houseId = kostList.id;
    const token = await AsyncStorage.getItem("@token");
    this.props.dispatch(getBooking(houseId, token));
  }

  submitBooking = async () => {
    const token = await AsyncStorage.getItem("@token");
    const data = {
      checkIn: this.props.booking.date,
      duration: this.props.booking.duration,
      houseId: this.props.booking.data.house.id
    };
    await createBooking(data, token);
    this.props.navigation.navigate("BookingList", {
      handleBack: () => this.props.navigation.navigate("Index")
    });
  };

  render() {
    const { checked } = this.state;
    const isEnable = checked == !false;
    const { data } = this.props.booking;

    return data ? (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.time}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("BookingCalender");
                }}
              >
                <Text>Tanggal Masuk </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <EvilIcons name="calendar" size={18} />
                  <Text>{this.props.booking.date}</Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  alignItems: "flex-end",
                  flex: 1
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("BookingDuration");
                  }}
                >
                  <Text>Durasi Sewa</Text>
                  <Text>{this.props.booking.duration} bulan</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line} />
            <View style={{ flex: 1, flexDirection: "row", marginVertical: 10 }}>
              <View style={{ alignItems: "flex-start", marginRight: 15 }}>
                <Image
                  source={{
                    uri: `${API_HOST}/${data.house.images[0].uri}`
                  }}
                  style={{ width: 100, height: 100 }}
                />
              </View>
              <View>
                <View style={{ flex: 1, alignItems: "flex-start" }}>
                  <Text>{data.house.house_name}</Text>
                </View>
                <View style={{ justifyContent: "flex-end" }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Rp. {changePrice(data.house.house_price)} / bulan
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.line} />
            <View style={{ flex: 1, marginVertical: 10 }}>
              <View style={styles.residance}>
                <View style={{ alignItems: "flex-start" }}>
                  <Text style={styles.header}>Data Penghuni</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}></View>
              </View>
              <View style={styles.residance}>
                <View style={{ alignItems: "flex-start" }}>
                  <Text>Nama Lengkap</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text>{data.userBooking.full_name}</Text>
                </View>
              </View>
              <View style={styles.residance}>
                <View style={{ alignItems: "flex-start" }}>
                  <Text>Jenis Kelamin</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text>Laki-laki</Text>
                </View>
              </View>
              <View style={styles.residance}>
                <View style={{ alignItems: "flex-start" }}>
                  <Text>No. Handphone</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text>{data.userBooking.telephone}</Text>
                </View>
              </View>
            </View>
            <View style={styles.line} />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  alignItems: "flex-end",
                  marginTop: 10
                }}
              >
                Deskripsi Kos
              </Text>
              <Text>{this.props.booking.data.house.house_description}</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.submitContainer}>
          <View style={styles.submitText}>
            <Checkbox
              color={primaryColor}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                this.setState({ checked: !checked });
              }}
            />
            <Text
              style={{ flex: 1 }}
              onPress={() => {
                this.setState({ checked: !checked });
              }}
            >
              Saya menyetujui syarat dan ketentuan berlaku dan memastikan data
              di atas benar.
            </Text>
          </View>
          <View>
            <Button
              color={primaryColor}
              disabled={!isEnable}
              mode="contained"
              onPress={this.submitBooking}
            >
              Book
            </Button>
          </View>
        </View>
      </View>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    booking: state.booking
  };
};

export default connect(mapStateToProps)(Booking);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  header: {
    fontWeight: "bold"
  },
  submitContainer: {
    position: "absolute",
    bottom: 0,
    width: width,
    borderTopWidth: 1,
    borderTopColor: bgColor
  },
  submitText: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 10
  },
  time: {
    flexDirection: "row",
    marginBottom: 15,
    flex: 1
  },
  residance: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5
  },
  line: {
    padding: 0,
    backgroundColor: "#f2f0f0",
    width: width - 20,
    height: 5
  }
});
