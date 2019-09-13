//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// create a component
class Message extends Component {
  static navigationOptions = ({ navigation }) => ({});

  render() {
    const { message } = this.props;
    return (
      <Card style={styles.cardContainer}>
        <Card.Content>
          <View style={styles.chatContainer}>
            <View style={styles.iconContainer}>
              <Icon style={styles.icon} name="account-star" size={25} />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nama}>{message.nama}</Text>
              <Text style={styles.message}>{message.pesan}</Text>
            </View>
            <View>
              <Text>12:37 AM</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row"
  },
  cardContainer: {
    marginBottom: 10
  },
  nameContainer: {
    flex: 1
  },
  iconContainer: {
    paddingRight: 15,
    justifyContent: "center"
  },
  nama: {
    fontSize: 18,
    fontWeight: "400"
  },
  message: {
    color: "#bdc3c7"
  },
  icon: {
    color: "#3498db"
  }
});

//make this component available to the app
export default Message;
