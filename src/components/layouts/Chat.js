import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Message from "../Message/Message";
import { bgColor } from "../../api/constans";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      message: [
        {
          id: "1",
          nama: "Saefulloh Maslul",
          pesan: "Saya mau pesan kos sekarang"
        },
        {
          id: "2",
          nama: "Suci Indah Lestari",
          pesan: "Saya mau pesan kos sekarang"
        }
      ]
    };
  }
  render() {
    const { message } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={message}
          renderItem={({ item }) => <Message message={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
    padding: 20
  }
});

export default Chat;
