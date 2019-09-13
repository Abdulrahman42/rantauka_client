import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class InputText extends Component {
  render() {
    const {
      placeholder,
      keyboard,
      value,
      onChange,
      onSubmit,
      style,
      keyboardType
    } = this.props;

    return (
      <TextInput
        style={style ? [styles.inputText, { ...style }] : styles.inputText}
        placeholder={placeholder}
        value={value}
        returnKeyType={keyboard ? keyboard : "default"}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        keyboardType={keyboardType ? keyboardType : "default"}
      />
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
