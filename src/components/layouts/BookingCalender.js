import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button } from "react-native-paper";
import { connect } from "react-redux";

import { primaryColor } from "../../api/constans";
import { changeBookingDate } from "../../_actions/booking";

class Calenders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }

  onDayPress = day => {
    this.props.dispatch(changeBookingDate(day.dateString));
    this.setState({
      selected: day.dateString
    });
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.header}>Mulai Kost Kapan?</Text>
        </View>
        <Calendar
          hideDayNames={true}
          onDayPress={this.onDayPress}
          hideExtraDays
          markedDates={{ [this.state.selected]: { selected: true } }}
          theme={{
            selectedDayBackgroundColor: primaryColor,
            todayTextColor: primaryColor,
            arrowColor: primaryColor
          }}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => this.props.navigation.navigate("Booking")}
        >
          Save
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    booking: state.booking
  };
};

export default connect(mapStateToProps)(Calenders);

const styles = StyleSheet.create({
  container: { marginLeft: 10, marginTop: 10 },
  header: { fontWeight: "bold", fontSize: 15 },
  button: {
    backgroundColor: primaryColor,
    marginHorizontal: 10
  }
});
