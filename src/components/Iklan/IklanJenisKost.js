//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

// create a component
class IklanJenisKost extends Component {
  constructor() {
    super();
    this.state = {
      jenisKost: ["Putra", "Putri", "Campuran"]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.props.data}
          onValueChange={itemValue => {
            this.props.onChange("jenisKost", itemValue);
          }}
        >
          {this.state.jenisKost.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {}
});

//make this component available to the app
export default IklanJenisKost;
