import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class InputText extends Component {
  render() {
    const {
      h2,
      placeholder,
      keyboard,
      value,
      onChange,
      onSubmit,
      style,
      keyboardType
    } = this.props;

    return (
      <View style={h2 ? styles.inputContainer : null}>
        <Text style={h2 ? styles.h2 : { display: "none" }}>{h2}</Text>
        <TextInput
          value={value}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          style={style ? [styles.inputText, { ...style }] : styles.inputText}
          placeholder={placeholder}
          returnKeyType={keyboard ? keyboard : "default"}
          keyboardType={keyboardType ? keyboardType : "default"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h2: {
    color: "#2c3e50",
    fontWeight: "500",
    fontSize: 15
  },
  inputContainer: { paddingTop: 10 },
  inputText: {
    borderBottomColor: "#b6daf2",
    borderBottomWidth: 2,
    paddingHorizontal: 5
  }
});

export default InputText;
