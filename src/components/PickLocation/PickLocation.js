import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Pick location"
            onPress={() => alert("Pick location")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  button: {
    margin: 8
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

export default PickLocation;
