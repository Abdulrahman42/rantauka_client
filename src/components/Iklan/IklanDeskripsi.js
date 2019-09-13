//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Picker, TextInput } from "react-native";

// create a component
class IklanJenisKost extends Component {
  constructor() {
    super();
    this.state = {
      deskripsi: ``
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.h2}>Masukkan deskripsi kost</Text>

        <TextInput
          style={styles.deskripsi}
          value={this.props.data}
          multiline={true}
          onChangeText={text => this.props.onChange("deskripsiKost", text)}
          placeholder="Masukkan deskripsi kost"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  deskripsi: {
    width: "100%",
    borderBottomColor: "#b6daf2",
    borderBottomWidth: 2,
    paddingHorizontal: 5
  },
  h2: {
    color: "#2c3e50",
    fontWeight: "500",
    fontSize: 15
  }
});

//make this component available to the app
export default IklanJenisKost;
