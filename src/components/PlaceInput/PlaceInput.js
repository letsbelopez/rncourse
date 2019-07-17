import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const placesInput = props => (
  <View style={styles.inputContainer}>
    <TextInput
      value={props.value}
      placeholder={props.placeholder}
      onChangeText={props.onChange}
      style={styles.placeInput}
    />
    <Button
      title={props.buttonTitle}
      style={styles.placeButton}
      onPress={props.onSubmit}
    />
  </View>
);

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return;

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.placeName}
          placeholder="Awesome places"
          onChangeText={this.placeNameChangeHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
