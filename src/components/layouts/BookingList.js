import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { connect } from "react-redux";
import { HeaderBackButton } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import { API_HOST } from "react-native-dotenv";

import { primaryColor } from "../../api/constans";
import { getOrders } from "../../_actions/order";

class Bookinglist extends Component {
  async componentDidMount() {
    const token = await AsyncStorage.getItem("@token");
    await this.props.dispatch(getOrders(token));
  }

  static navigationOptions = ({ navigation }) => {
    const handleBack = navigation.getParam("handleBack", () =>
      navigation.goBack()
    );
    return {
      headerLeft: (
        <HeaderBackButton tintColor={primaryColor} onPress={handleBack} />
      ),
      title: "Booking"
    };
  };

  render() {
    const { data } = this.props.orders;
    return data ? (
      <ScrollView>
        {data.map(order => (
          <Card key={order.id} style={styles.container}>
            <Card.Content style={{ paddingHorizontal: 0, paddingVertical: 0 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.image}>
                  <Image
                    source={{
                      uri: `${API_HOST}/${order.house.images[0].uri}`
                    }}
                    style={{
                      width: 100,
                      height: 120,
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5
                    }}
                  />
                </View>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                  <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      {order.house.house_name}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ marginRight: 15 }}>
                      <Text>Booking</Text>
                      <Text>{order.checkIn.substring(0, 10)}</Text>
                    </View>
                    <View>
                      <Text>Durasi Sewa</Text>
                      <Text>{order.duration} bulan</Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 15, color: primaryColor }}>
                      {order.status ? `Sukses` : `Tunggu Konfirmasi`}
                    </Text>
                  </View>
                </View>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

export default connect(mapStateToProps)(Bookinglist);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  image: {
    marginRight: 5
  },
  header: {
    backgroundColor: "#2980b9"
  }
});
