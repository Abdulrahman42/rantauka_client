import React, { Component } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";

import { primaryColor } from "../../api/constans";
import { changeBookingDuration } from "../../_actions/booking";

class Duration extends Component {
  updateMount = duration => {
    this.props.dispatch(changeBookingDuration(duration));
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Mulai kost berapa lama?</Text>
        </View>
        <View style={styles.content}>
          <Text>Durasi sewa</Text>
          <Picker
            style={{ alignItems: "flex-end" }}
            selectedValue={this.props.booking.duration}
            mode="dialog"
            style={{ height: 30, width: 150, fontSize: 15 }}
            onValueChange={this.updateMount}
          >
            <Picker.Item label="1 bulan" value="1" />
            <Picker.Item label="2 bulan" value="2" />
            <Picker.Item label="3 bulan" value="3" />
            <Picker.Item label="4 bulan" value="4" />
            <Picker.Item label="5 bulan" value="5" />
            <Picker.Item label="6 bulan" value="6" />
            <Picker.Item label="7 bulan" value="7" />
            <Picker.Item label="8 bulan" value="8" />
            <Picker.Item label="9 bulan" value="9" />
            <Picker.Item label="10 bulan" value="10" />
            <Picker.Item label="11 bulan" value="11" />
            <Picker.Item label="12 bulan" value="12" />
          </Picker>
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <Button
            color={primaryColor}
            mode="contained"
            onPress={() => {
              this.props.navigation.navigate("Booking");
            }}
          >
            save
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    booking: state.booking
  };
};

export default connect(mapStateToProps)(Duration);

const styles = StyleSheet.create({
  container: { marginHorizontal: 10, marginTop: 10 },
  header: { fontWeight: "bold", fontSize: 15 },
  content: { flexDirection: "row", alignItems: "center" }
});
