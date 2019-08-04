import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
  <TextInput
    {...props} // spreads the props. enables us to give default TextInput props (ie placeholder) to the custom DefaultInput component
    style={[styles.input, props.style]}
    underlineColorAndroid="transparent"
  />
);

export default defaultInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 8
  }
});
